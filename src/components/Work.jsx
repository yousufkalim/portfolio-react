import React, { useState } from "react";

//Importing Modules
import { Circle } from "rc-progress";
import VisibilitySensor from "react-visibility-sensor";

//Importing Actions
import {
	handleCircleOne,
	handleCircleTwo,
	handleCircleThree,
} from "../actions";

//Style
import "../Style/Work.css";

function Work({ title, tagline, description }) {
	let [circleOne, setCircleOne] = useState(0);
	let [circleTwo, setCircleTwo] = useState(0);
	let [circleThree, setCircleThree] = useState(0);

	return (
		<VisibilitySensor
			onChange={(isVisible) => {
				handleCircleOne(isVisible, circleOne, setCircleOne);
				handleCircleTwo(isVisible, circleTwo, setCircleTwo);
				handleCircleThree(isVisible, circleThree, setCircleThree);
			}}
		>
			<section className="work">
				<div className="work-container">
					<div className="work-heading">
						<h1>{title}</h1>
						<h3>{tagline}</h3>
						<div className="border"></div>
					</div>
					<p className="work-description">{description}</p>
					<div className="progress">
						<div className="progress-block">
							<i class="fab fa-gitlab"></i>
							<Circle
								className="circle"
								percent={circleOne}
								strokeWidth="5"
								strokeColor="#FA225A"
								trailWidth="0"
							/>
						</div>
						<div className="progress-block">
							<i class="fas fa-shield-alt"></i>
							<Circle
								className="circle"
								percent={circleTwo}
								strokeWidth="5"
								strokeColor="#FA225A"
								trailWidth="0"
							/>
						</div>
						<div className="progress-block">
							<i class="far fa-gem"></i>
							<Circle
								className="circle"
								percent={circleThree}
								strokeWidth="5"
								strokeColor="#FA225A"
								trailWidth="0"
							/>
						</div>
					</div>
				</div>
			</section>
		</VisibilitySensor>
	);
}

export default Work;
