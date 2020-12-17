//Init
import React from "react";
import ReactHTMLParser from "react-html-parser";

//Importing Components
import Nav from "../components/Nav";
import Quote from "../components/Quote";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

//Style
import "../Style/PortfolioProject.css";

//Component
function PortfolioProject({
	cover,
	skills,
	category,
	copyright,
	weburl,
	heading,
	description,
}) {
	return (
		<>
			{/* Navbar */}
			<Nav />

			{/* Cover Image and Project Info */}
			<section className="project">
				<div className="project-img">
					<img src={cover} alt="Cover Pic of Project" />
				</div>

				<div className="project-details">
					<div className="project-details-container">
						<div className="project-info">
							<span>{heading}</span>
							<div>{ReactHTMLParser(description)}</div>
						</div>
						<div className="project-card">
							<table>
								<tr>
									<td>SKILLS NEEDED</td>
									<td>{skills}</td>
								</tr>
								<tr>
									<td>CATEGORIES</td>
									<td>{category}</td>
								</tr>
								<tr>
									<td>COPYRIGHT</td>
									<td>{copyright}</td>
								</tr>
							</table>
							<a href={weburl} target="_blank" rel="noreferrer">
								<button>VIEW LIVE WEBSITE</button>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Common Components */}
			<Quote />
			<Contact />
			<Footer />
		</>
	);
}

//Export
export default PortfolioProject;
