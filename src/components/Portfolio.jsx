//Init
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Style
import "../Style/Portfolio.css";

//Portfolio Items Component
function PortfolioItems({ title, link, thumbnail, inHome }) {
	return (
		<Link to={link}>
			<div
				className="portfolio-item"
				style={inHome ? { border: "1px solid black" } : null}
			>
				<div className="portfolio-overlay">{title}</div>
				<img src={thumbnail} alt="Thumbnail" />
			</div>
		</Link>
	);
}

//View All Work Component
function ViewAll() {
	return (
		<Link to="/portfolio" className="view-all-link">
			<p>VIEW ALL WORK</p>
		</Link>
	);
}

//Portfolio Component
function Portfolio({ inHome }) {
	//Initializing State
	let [portfolio, setPortfolio] = useState([]);

	//Getting data from database
	useEffect(() => {
		axios.get("/portfolio").then((res) => {
			setPortfolio([...res.data]);
		});
	}, []);

	//Rendering Component
	return (
		<React.Fragment>
			<div className="portfolio">
				{portfolio.map((item, index) => {
					return (
						<PortfolioItems
							key={index}
							title={item.title}
							link={item.link}
							thumbnail={item.thumbnail}
							inHome={inHome}
						/>
					);
				})}
			</div>

			{inHome ? <ViewAll /> : null}
		</React.Fragment>
	);
}

//Export
export default Portfolio;
