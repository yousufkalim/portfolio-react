//Init
import React from "react";

//Style
import "../Style/Recent.css";

//Component to Render
function Recent({ title, tagline }) {
	return (
		<section className="recent">
			<div className="recent-heading">
				<h1>{title}</h1>
				<h3>{tagline}</h3>
				<div className="border"></div>
			</div>
		</section>
	);
}

//Export
export default Recent;
