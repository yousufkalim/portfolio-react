import React from "react";

//Style
import "../Style/About.css";

//Component
function About() {
	return (
		<section className="about">
			<div className="about-heading">
				<h1>About Me</h1>
				<h3>UI & UX EXPERT</h3>
				<div className="border"></div>
			</div>
			<div className="about-container">
				<p className="about-data">
					Hello, I’m Yousuf . I’m professional Web Developer/Designer
					& Programmer and I have over 6 year’s experience in Web
					Development, I specialized in all kind of Websites, My goal
					is to provide fast & friendly communication, lowest prices
					and to build long term relationships
					<br />
					<br />
					I’m a certified Software Engineer from the University of
					Lahore, I did BSSE in 2014 and I’m doing my work on regular
					bases, I have over six years of experience in Web Designing
					and Development, But nowadays I’m doing only web designing
					because it’s my hobby not work.
				</p>
				<p className="about-data">
					I have my office in Raiwind, Lahore where I provide my
					services, And also I do online meetings for fecilitate my
					clients as possible, I can covert any PSD/Ai/etc into full
					responsive (mobile friendly) HTML, CSS and JavaScript
					Website and also I do free support for 1 month, I can also
					convert your PSD/Ai/etc into the static Website and live it
					to online server.
					<br />
					<br />
					You can check my work below in Portfolio section, I attached
					all my recent works, You can easily contact me and we can
					disscus about your needs and requirments and full
					conversation will remain private.
				</p>
			</div>
		</section>
	);
}

//Export
export default About;
