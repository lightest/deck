import { iSlide } from "../../types/Talk";
import * as WsClient from "./WebsocketClient";

const API = {
    async fetchSlides(talkId:string): Promise<Array<iSlide>>
    {
        const msgResponse = await WsClient.sendMessageWithResponsePromise({
            type: "api-request",
            request: "slides",
            talkId,
        });

        const slides: Array<iSlide> = msgResponse.response;

        return slides;
    }
};

export default API;
