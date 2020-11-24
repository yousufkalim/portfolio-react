import React from "react";

//Style
import "../Style/Work.css";

function Work({ title, tagline, discription }) {
	return (
		<section className="work">
			<div className="work-container">
				<div className="work-heading">
					<h1>{title}</h1>
					<h3>{tagline}</h3>
					<div className="border"></div>
				</div>
				<p className="work-discription">{discription}</p>
			</div>
		</section>
	);
}

export default Work;
