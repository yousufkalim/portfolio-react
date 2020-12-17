//init
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

//Data
import { inspiredHeading } from "../data/recent";

//Style
import "../style/InspiredHeading.css";

//Component
function InspiredHeading() {
	let [visibility, setVisibility] = useState(false);

	const handleVisibility = (isVisible) => {
		if (isVisible) {
			setVisibility(true);
		}
	};

	return (
		<section className="inspired-heading">
			<h1>{inspiredHeading.title}</h1>
			<span>{inspiredHeading.tagline}</span>
			<div className="border"></div>

			{/* Checking Visibility to Animate */}
			<VisibilitySensor
				partialVisibility
				onChange={(isVisible) => handleVisibility(isVisible)}
			>
				<div className={`gem-icon ${visibility && "icon-visible"}`}>
					<i class="far fa-gem"></i>
				</div>
			</VisibilitySensor>
		</section>
	);
}

//Export
export default InspiredHeading;
