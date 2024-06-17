import { useState } from "react";
import "./App.css"
import { EventsList } from "./components/EventsList/EventsList";
import { eventData } from "./Dataset";

function App()
{
	return (
		<>
			<EventsList events={eventData}></EventsList>
		</>
	);
}

export default App
