export interface iTalk
{
	id: string,
	name: string,
	timeStartISO: string,
	timeEndISO: string,
	speakers: Array<string>,
	tags: Array<string>,
}

export interface iSlide
{
	id: string,
	img: string,
	notes: string
}

export class Talk implements iTalk
{
	id;
	name;
	timeStartISO;
	timeEndISO;
	speakers;
	tags;

	constructor(data: iTalk)
	{
		this.id = data.id;
		this.name = data.name;
		this.timeStartISO = data.timeStartISO;
		this.timeEndISO = data.timeEndISO;
		this.speakers = data.speakers;
		this.tags = data.tags;
	}

	private getHoursMinutesFromDate(t: Date)
	{
		let hours: number = t.getHours();
		let minutes: number = t.getMinutes();
		let hoursStr = `${hours}`;
		let minutesStr = `${minutes}`;

		if (hours < 10)
		{
			hoursStr = `0${hours}`;
		}

		if (minutes < 10)
		{
			minutesStr = `0${minutes}`;
		}

		return `${hoursStr}:${minutesStr}`;
	}

	getTalkTimeStrings()
	{
		const timeStartDate = new Date(this.timeStartISO);
		const timeEndDate = new Date(this.timeEndISO);

		const timeStart = this.getHoursMinutesFromDate(timeStartDate);
		const timeEnd = this.getHoursMinutesFromDate(timeEndDate);

		return {
			timeStart,
			timeEnd
		};
	}
}
