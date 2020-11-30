//Init
import React from "react";
import { Link } from "react-router-dom";

//Article Data
import blog from "../data/blog";

//Style
import "../Style/ExpertAdvice.css";

//Single Article Container
function Article({ link, image, title, metaDescription }) {
	return (
		<div className="article">
			<Link to={link}>
				<div className="article-img-container">
					<div className="article-overlay">{title}</div>
					<img src={image} alt="Article Thumbnail" />
				</div>
			</Link>
			<div className="article-info">
				<h2>{title}</h2>
				<p>{metaDescription}</p>
			</div>
		</div>
	);
}

//Expert Advice Container
function ExpertAdvice() {
	return (
		<section className="expert-advice">
			{blog.map((article, index) => {
				return (
					<Article
						key={index}
						link={article.link}
						image={article.image}
						title={article.title}
						metaDescription={article.metaDescription}
					/>
				);
			})}
		</section>
	);
}

export default ExpertAdvice;
