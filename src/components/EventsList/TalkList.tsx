import "./EventsList.css";
import { useState } from "react";
import { iTalk, Talk } from "../../types/Talk";

interface iProps
{
	talks: Array<Talk>
};

export function TalkList({ talks: talks }: iProps)
{
	const [selectedDate, setDate] = useState("Fri, Aug 23");
	const [filteredTalks, setFilteredTalks] = useState(talks);
	const [searchVal, setSearchVal] = useState("");

	function filterTalks(e)
	{
		const searchVal = e.currentTarget.value;
		setSearchVal(searchVal);
		let searchResult: Array<Talk>;

		if (searchVal.length === 0)
		{
			searchResult = talks;
		}
		else
		{
			searchResult = talks.filter(t =>
			{
				return t.name.toLowerCase().indexOf(searchVal) > -1;
			});
		}

		setFilteredTalks(searchResult);
	}

	return <>
		<div className="search-container">
			<input
				type="text"
				className="search-input"
				value={searchVal}
				onChange={filterTalks}
			/>
			<div className="date-picker-btn">{ selectedDate }</div>
		</div>

		<div className="events-list">
		{
			filteredTalks.map(talk =>
			{
				const timeRange = talk.getTalkTimeStrings();

				return <div className="event-list-item" key={talk.id}>
					<div className="event-name">{talk.name}</div>
					<div className="event-time">{timeRange.timeStart} - {timeRange.timeEnd}</div>
					<div className="event-speakers">{talk.speakers.join(", ")}</div>
				</div>
			})
		}
		</div>
	</>;
}
