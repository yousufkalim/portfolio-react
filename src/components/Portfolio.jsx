//Init
import React from "react";
import { Link } from "react-router-dom";

//Data Importing
import portfolio from "../data/portfolio";

//Style
import "../Style/Portfolio.css";

//Portfolio Items Component
function PortfolioItems({ title, link, thumbnail }) {
	return (
		<Link to={link}>
			<div className="portfolio-item">
				<div className="portfolio-overlay">{title}</div>
				<img src={thumbnail} alt="Thumbnail" />
			</div>
		</Link>
	);
}

//Portfolio Component
function Portfolio() {
	return (
		<div className="portfolio">
			{portfolio.map((item, index) => {
				return (
					<PortfolioItems
						key={index}
						title={item.title}
						link={item.link}
						thumbnail={item.thumbnail}
					/>
				);
			})}
		</div>
	);
}

//Export
export default Portfolio;
