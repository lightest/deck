import { useCallback, useEffect, useState } from "react";
import Networking from "../../core/Networking/Networking";
import { iSlide } from "../../types/Talk";
import "./SlidesPage.css";

interface iSlidesPageProps
{
	talkId: string
}

async function fetchSlides(talkId:string, setSlides: Function)
{
	console.log("fetching data", talkId);
	const slides = await Networking.fetchSlides(talkId);
	console.log(slides);
	setSlides(slides);
}

export default function SlidesPage({ talkId }: iSlidesPageProps)
{
	const [slides, setSlides] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	console.log("component init");

	if (!talkId)
	{
		talkId = "45b5c459-5f2b-4d09-9afb-4f7598d92aa2";
	}

	useEffect(() =>
	{
		fetchSlides(talkId, setSlides);
	}, [talkId]);

	function getSlideClassName (idx: number): string
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
	};

	function onKeydown(e)
	{
		console.log(e.key);
		if (e.key === "ArrowRight")
		{
			console.log(slides.length);
			const newCurSlide = Math.min(currentSlide + 1, slides.length - 1);
			console.log(newCurSlide);
			setCurrentSlide(newCurSlide);
		}
		else if (e.key === "ArrowLeft")
		{
			const newCurSlide = Math.max(currentSlide - 1, 0);
			console.log(newCurSlide);
			setCurrentSlide(newCurSlide);
		}
	}

	useEffect(() =>
	{
		window.addEventListener("keydown", onKeydown);

		return () =>
		{
			console.log("component destroy");
			window.removeEventListener("keydown", onKeydown);
		};
	}, [slides, currentSlide]);

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
