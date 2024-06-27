import { TalkList } from "../../components/TalksList/TalksList";
import { eventData as talkData } from "../../Dataset";
import { Talk } from "../../types/Talk";

function processDataset(): Array<Talk>
{
	const talks: Array<Talk> = [];

	for (let i = 0; i < talkData.length; i++)
	{
		talks.push(new Talk(talkData[i]));
	}

	return talks;
}

const talks = processDataset();

export default function HomePage()
{
    return <>
        <TalkList talks={talks}></TalkList>
    </>;
}
