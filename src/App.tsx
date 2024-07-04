import { useEffect, useState } from "react";
import
	{
		createBrowserRouter,
		RouterProvider
	} from "react-router-dom";
import HomePage from "./routes/home/HomePage";
import SlidesPage from "./routes/slides/SlidesPage";
import * as wsClient from "./core/Networking/WebsocketClient";
import "./App.css"


const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage></HomePage>
	},
	{
		path: "slides",
		element: <SlidesPage></SlidesPage>
	}
]);

function connectToServer()
{
	wsClient.init()
}

function disconnect()
{
	wsClient.destroy();
}

function App()
{
	useEffect(() =>
	{
		connectToServer();
		return disconnect;
	}, []);

	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App
