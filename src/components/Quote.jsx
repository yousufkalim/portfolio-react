//Init
import React from "react";
import quoteImage from "../images/Home/quote.png";

//Importing Quote Data
import quotes from "../data/quotes";

//Modules
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Style
import "../Style/Quote.css";

//Single Quote Component
function SingleQuote({ quote, quoter }) {
	return (
		<>
			<div className="quote-img">
				<img src={quoteImage} alt="Quote" />
			</div>
			<p className="single-quote">{quote}</p>
			<p className="quoter">{quoter}</p>
		</>
	);
}

//Quote Component
function Quote() {
	return (
		<section className="quote">
			<div className="quote-container">
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
								quoter={quote.quoter}
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
