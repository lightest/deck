import "./TalksList.css";
import { useState } from "react";
import { iTalk, Talk } from "../../types/Talk";
import { SearchBar } from "../SearchBar/SearchBar";

interface iProps
{
	talks: Array<Talk>
};

export function TalkList({ talks: talks }: iProps)
{
	const [selectedDate, setDate] = useState("Fri, Aug 23");
	const [filteredTalks, setFilteredTalks] = useState(talks);

	function filterTalks(text:string)
	{
		let searchResult: Array<Talk>;

		if (text.length === 0)
		{
			searchResult = talks;
		}
		else
		{
			searchResult = talks.filter(t =>
			{
				return t.name.toLowerCase().indexOf(text) > -1;
			});
		}

		setFilteredTalks(searchResult);
	}

	return <>
		<div className="top-bar-container">
			<SearchBar onChange={filterTalks}></SearchBar>
			<div className="date-picker-btn">{ selectedDate }</div>
		</div>

		<div className="talks-list">
		{
			filteredTalks.map(talk =>
			{
				const timeRange = talk.getTalkTimeStrings();

				return <div className="talk-list-item" key={talk.id}>
					<div className="talk-name">{talk.name}</div>
					<div className="talk-time">{timeRange.timeStart} - {timeRange.timeEnd}</div>
					<div className="talk-speakers">{talk.speakers.join(", ")}</div>
				</div>
			})
		}
		</div>
	</>;
}
