//Init
import React from "react";

//Style
import "../Style/SkewedHeading.css";

//Component to Render
function SkewedHeading({ bgClass, title, tagline }) {
	return (
		<section className={`skewed ${bgClass}`}>
			<div className="skewed-heading">
				<h1>{title}</h1>
				<h3>{tagline}</h3>
				<div className="border"></div>
			</div>
		</section>
	);
}

//Export
export default SkewedHeading;
