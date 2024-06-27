import { useState } from "react";
import
	{
		createBrowserRouter,
		RouterProvider
	} from "react-router-dom";
import HomePage from "./routes/home/HomePage";
import SlidesPage from "./routes/slides/SlidesPage";
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

function App()
{
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App
