//Init
import React from "react";

//Style
import "../Style/About.css";

//Component
function About({ columnOne, columnTwo }) {
	return (
		<section className="about">
			<div className="about-heading">
				<h1>About Me</h1>
				<h3>UI & UX EXPERT</h3>
				<div className="border"></div>
			</div>
			<div className="about-container">
				<p className="about-data">{columnOne}</p>
				<p className="about-data">{columnTwo}</p>
			</div>
		</section>
	);
}

//Export
export default About;
