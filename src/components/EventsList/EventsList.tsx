import "./EventsList.css";
import { iEvent } from "../../types/Event";

interface iProps
{
	events: Array<iEvent>
};

export function EventsList({ events }: iProps)
{
	return <div className="events-list">
		{
			events.map(e =>
			{
				return <div className="events-list-item" key={e.id}>
					<div className="event-name">{e.name}</div>
					<div className="event-time">{e.time}</div>
					<div className="event-speakers">{e.speakers.join(", ")}</div>
				</div>
			})
		}
	</div>;
}
