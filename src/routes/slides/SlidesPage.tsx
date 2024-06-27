import { useCallback, useEffect, useState } from "react";
import remoteAPI from "../../core/remoteAPI";
import { iSlide } from "../../types/Talk";
import "./SlidesPage.css";

interface iSlidesPageProps
{
	talkId: string
}

async function fetchSlides(talkId:string, setSlides: Function)
{
	console.log("fetching data", talkId);
	const slides = await remoteAPI.fetchSlides(talkId);
	setSlides(slides);
}

export default function SlidesPage({ talkId }: iSlidesPageProps)
{
	const [slides, setSlides] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);

	const getSlideClassName = useCallback(
	(idx: number): string =>
	{
		let slideClass = "";

		if (idx === currentSlide)
		{
			slideClass = "current";
		}
		else if (idx < currentSlide)
		{
			slideClass = "previous";
		}
		else
		{
			slideClass = "next";
		}

		return `slide ${slideClass}`;
	}, []);

	useEffect(() =>
	{
		fetchSlides(talkId, setSlides);
	}, [talkId]);

	useEffect(() =>
	{

		function onKeydown()
		{
			console.log("");
		}

		window.addEventListener("keydown", onKeydown);

		return () =>
		{
			window.removeEventListener("keydown", onKeydown);
		};
	}, []);

	return <>
		<div className="slides-container">
			{slides.map((s:iSlide, idx:number) =>
			{
				return (
					<div className={getSlideClassName(idx)} key={s.id}>
						<img src={ s.img }/>
					</div>
				)
			})}
		</div>
	</>;
}
