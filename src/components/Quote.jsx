//Init
import React, { useState, useEffect } from "react";
import quoteImage from "../images/Home/quote.png";
import fetch from "../controllers/dataFetch";

//Modules
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Style
import "../Style/Quote.css";

//Single Quote Component
function SingleQuote({ quote, author }) {
	return (
		<>
			<div className="quote-img">
				<img src={quoteImage} alt="Quote" />
			</div>
			<p className="single-quote">{quote}</p>
			<p className="author">{author}</p>
		</>
	);
}

//Quote Component
function Quote({ inHome }) {
	//initializing state
	let [quotes, setQuotes] = useState([]);

	//Getting data from database
	useEffect(() => {
		fetch("quotes", setQuotes);
	}, []);

	//Rendering Component
	return (
		<section className="quote">
			<div
				className="quote-container"
				style={inHome ? { paddingBottom: "160px" } : null}
			>
				<Carousel
					autoPlay
					infiniteLoop
					interval="8000"
					transitionTime="1000"
				>
					{quotes.map((quote, index) => {
						return (
							<SingleQuote
								key={index}
								quote={quote.quote}
								author={quote.author}
							/>
						);
					})}
				</Carousel>
			</div>
		</section>
	);
}

//Export
export default Quote;
