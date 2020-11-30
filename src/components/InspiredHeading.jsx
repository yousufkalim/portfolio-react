//init
import React from "react";

//Data
import { inspiredHeading } from "../data/recent";

//Style
import "../Style/InspiredHeading.css";

//Component
function InspiredHeading() {
	return (
		<section className="inspired-heading">
			<h1>{inspiredHeading.title}</h1>
			<span>{inspiredHeading.tagline}</span>
			<div className="border"></div>
			<div className="gem-icon">
				<i class="far fa-gem"></i>
			</div>
		</section>
	);
}

//Export
export default InspiredHeading;
