import { useState } from "react";
import "./App.css"
import { TalkList } from "./components/EventsList/TalkList";
import { eventData as talkData } from "./Dataset";
import { Talk } from "./types/Talk";

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

function App()
{
	return (
		<>
			<TalkList talks={talks}></TalkList>
		</>
	);
}

export default App
