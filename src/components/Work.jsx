//Init
import React, { useState } from "react";

//Importing Modules
import { Circle } from "rc-progress";
import VisibilitySensor from "react-visibility-sensor";

//Importing Actions from External file
import {
	handleCircleOne,
	handleCircleTwo,
	handleCircleThree,
} from "../controllers/work";

//Style
import "../style/Work.css";

//Progress Component
function Progress() {
	//Initializing State
	let [circleOne, setCircleOne] = useState(1);
	let [circleTwo, setCircleTwo] = useState(1);
	let [circleThree, setCircleThree] = useState(1);

	return (
		// Using Visibility Sensor to run progress bar when this component shows to user
		<VisibilitySensor
			partialVisibility
			onChange={(isVisible) => {
				handleCircleOne(isVisible, circleOne, setCircleOne);
				handleCircleTwo(isVisible, circleTwo, setCircleTwo);
				handleCircleThree(isVisible, circleThree, setCircleThree);
			}}
		>
			<div className="progress">
				<div className="progress-block-container">
					<div className="progress-block">
						<i className="fab fa-gitlab"></i>
						<Circle
							className="circle"
							percent={circleOne <= 88 ? circleOne : 88}
							strokeWidth="5"
							strokeColor="#FA225A"
							trailWidth="0"
						/>
					</div>
					<p>WEB DESIGN</p>
				</div>
				<div className="progress-block-container">
					<div className="progress-block">
						<i className="fas fa-shield-alt"></i>
						<Circle
							className="circle"
							percent={circleTwo <= 82 ? circleTwo : 82}
							strokeWidth="5"
							strokeColor="#FA225A"
							trailWidth="0"
						/>
					</div>
					<p>RESPONSIVE</p>
				</div>
				<div className="progress-block-container">
					<div className="progress-block">
						<i className="far fa-gem"></i>
						<Circle
							className="circle"
							percent={circleThree <= 95 ? circleThree : 95}
							strokeWidth="5"
							strokeColor="#FA225A"
							trailWidth="0"
						/>
					</div>
					<p>UI / UX</p>
				</div>
			</div>
		</VisibilitySensor>
	);
}

//Work Section Component
function Work({ title, tagline, description }) {
	return (
		<section className="work">
			<div className="work-container">
				<div className="work-heading">
					<h1>{title}</h1>
					<h3>{tagline}</h3>
					<div className="border"></div>
				</div>
				<p className="work-description">{description}</p>
				<Progress />
			</div>
		</section>
	);
}

//Exports
export default Work;
