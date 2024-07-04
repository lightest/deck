const SERVER_ADDRESS = "ws://localhost:29756";
const RECONNECT_TIMEOUT = 1500;
const RETRY_MESSAGE_SEND_TIMEOUT = 1500;
const MAX_RETRY_ATTEMPTS = 5;

interface iPromisedMessages
{
    resolve: Function,
    reject: Function,
    msg: any
}

interface iMessageResponse
{
    id: string,
    response: any
}

let socket: WebSocket;
let reconnectTimeout: number | undefined = undefined;
let promises: Record<string, iPromisedMessages> = {};
let retryTimouts:Array<number> = [];

function retryConnect()
{
    clearTimeout(reconnectTimeout);
    reconnectTimeout = setTimeout(() =>
    {
        init();
        retryConnect();
    }, RECONNECT_TIMEOUT);
    console.log("Retrying to connect in", RECONNECT_TIMEOUT);
}

function retryMessageSend(msg: string, retryAttempt?: number)
{
    if (Number.isFinite(retryAttempt))
    {
        if (retryAttempt >= MAX_RETRY_ATTEMPTS)
        {
            console.log("Max retry attempts reached.")
            return;
        }

        retryAttempt++;
    }
    else
    {
        retryAttempt = 1;
    }

    console.log("Retry message send in:", RETRY_MESSAGE_SEND_TIMEOUT);

    const messageSendRetryTimeout = setTimeout(() =>
    {
        const timoutIdx = retryTimouts.indexOf(messageSendRetryTimeout);
        if (timoutIdx > -1)
        {
            retryTimouts.splice(timoutIdx, 1);
        }
        sendMessage(msg, retryAttempt);
    }, RETRY_MESSAGE_SEND_TIMEOUT);

    retryTimouts.push(messageSendRetryTimeout);
}

function processDanglingPromisedMessages()
{
    // Try to send again all dangling messages.
    // Danglng message means the response for it wasn't received.
    // That can happen due to socket error for instance.
    for (let i in promises)
    {
        sendMessage(promises[i].msg);
    }
}

function handleSocketOpen()
{
    clearTimeout(reconnectTimeout);
    console.log("Socket is opened, sending hello.");
    socket.send(JSON.stringify({ msg: "hello from client!" }));
    processDanglingPromisedMessages();
}

function handleSocketMessage(messageEvent:MessageEvent)
{
    console.log("incoming ws message", messageEvent);

    try
    {
        const msg:iMessageResponse = JSON.parse(messageEvent.data);

        if (msg.hasOwnProperty("id") && promises[msg.id])
        {
            promises[msg.id].resolve(msg);
            delete promises[msg.id];
        }
    }
    catch (err)
    {
        console.error("Caught an error while handling received message.", err);
    }
}

function handleSocketClose(e)
{
    console.log("socket closed", e);
    retryConnect();
}

function handleSocketError(err:any)
{
    console.error(err);
}

export function sendMessage(msg: any, retryAttempt?: number)
{
    let msgString = "";

    if (typeof msg === "string")
    {
        msgString = msg;
    }
    else
    {
        try
        {
            msgString = JSON.stringify(msg);
        }
        catch (err)
        {
            console.error("Caught an error while trying to stringify the message:", msg);

            if (promises[msg.id])
            {
                promises[msg.id].reject(err);
                delete promises[msg.id];
            }

            return;
        }
    }

    try
    {
        console.log("sending message", msgString);
        socket.send(msgString);
    }
    catch (err)
    {
        console.error("Caught an err while sending socket message:", err);
        retryMessageSend(msgString, retryAttempt);
    }
}

export function sendMessageWithResponsePromise(msg: any): Promise<any>
{
    msg.id = crypto.randomUUID();

    const requestPromise = new Promise((resolve, reject) =>
    {
        promises[msg.id] = { resolve, reject, msg };
    });

    sendMessage(msg);

    return requestPromise;
}

export function init()
{
    if (socket)
    {
        socket.close();
    }

    socket = new WebSocket(SERVER_ADDRESS);

    socket.addEventListener("open", handleSocketOpen);
    socket.addEventListener("message", handleSocketMessage);
    socket.addEventListener("close", handleSocketClose);
    socket.addEventListener("error", handleSocketError);

    window["socket"] = socket;
}

export function destroy()
{
    if (socket)
    {
        clearTimeout(reconnectTimeout);
        socket.close();
    }

    for (let i = 0; i < retryTimouts.length; i++)
    {
        clearTimeout(retryTimouts[i]);
    }
}
