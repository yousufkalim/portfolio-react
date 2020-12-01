import React from "react";

import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

//Style
import "../Style/Article.css";

function Article({ image, title, blog, date }) {
	return (
		<React.Fragment>
			<Nav />

			{/* Image */}
			<div className="single-article-page">
				<div className="single-article-page-image">
					<h1>{title}</h1>
					<img src={image} alt={title} />
				</div>

				{/* Article */}
				<div className="single-article-page-container">{blog}</div>
			</div>
		</React.Fragment>
	);
}

export default Article;
