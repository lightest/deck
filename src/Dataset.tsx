import { iTalk } from "./types/Talk";

export const eventData:Array<iTalk> = [
	{
		id: crypto.randomUUID(),
		name: "Artificial Intelligence / Machine Learning Workshop in Waterloo",
		timeStartISO: "2024-06-21T08:00:00.000Z",
		timeEndISO: "2024-06-21T09:00:00.000Z",
		speakers: [],
		tags: ["AI"]
	},
	{
		id: crypto.randomUUID(),
		name: "Nubis3: Methods (and madness) to model and render immersive real-time voxel-based clouds",
		timeStartISO: "2024-06-21T12:30:00.000Z",
		timeEndISO: "2024-06-21T13:30:00.000Z",
		speakers: ["Andrew Schneider"],
		tags: ["real-time graphics"]
	},
	{
		id: crypto.randomUUID(),
		name: "Authoring Materials That Matters - Substrate in Unreal Engine 5",
		timeStartISO: "2024-06-21T13:30:00.000Z",
		timeEndISO: "2024-06-21T14:00:00.000Z",
		speakers: ["Sébastien Hillaire", "Charles de Rousiers"],
		tags: ["unreal engine"]
	}
];
