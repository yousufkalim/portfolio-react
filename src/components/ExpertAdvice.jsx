//Init
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Article Data
import fetch from "../controllers/dataFetch";

//Style
import "../style/ExpertAdvice.css";

//Single Article Container
function Article({ link, image, title, description }) {
	return (
		<div className="article">
			<Link to={link}>
				<div className="article-img-container">
					<div className="article-overlay">{title}</div>
					<img src={image} alt="Article Thumbnail" />
				</div>
			</Link>
			<div className="article-info">
				<Link to={link}>
					<h2>{title}</h2>
				</Link>
				<p>{description}</p>
			</div>
		</div>
	);
}

//Expert Advice Container
function ExpertAdvice() {
	//Intiializing State
	let [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch("articles", setArticles);
	}, []);

	return (
		<section className="expert-advice">
			{articles.slice(0, 3).map((article, index) => {
				return (
					<Article
						key={index}
						link={article.link}
						image={article.image}
						title={article.title}
						description={article.description}
					/>
				);
			})}
		</section>
	);
}

export default ExpertAdvice;
