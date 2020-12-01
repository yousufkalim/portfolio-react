//Init
import React from "react";
import { Link } from "react-router-dom";

//Importing Data
import blog from "../data/blog";

//importing Components
import Nav from "../components/Nav";
import HeaderGlobal from "../components/HeaderGlobal";
import Footer from "../components/Footer";

//Style
import "../Style/Articles.css";

//Article Page Component
function Articles() {
	return (
		<React.Fragment>
			<Nav />
			<HeaderGlobal
				title="Web Design Articles"
				quote="WEB DESIGN & DEVELOPMENT ARTICLES BY YOUSUF KALIM"
			/>

			{/* Articles */}

			<div className="articles-container">
				{blog.map((article) => {
					return (
						<div className="single-article">
							<Link to={article.link}>
								<div className="single-article-img-container">
									<div className="single-article-overlay">
										{article.title}
									</div>
									<img
										src={article.image}
										alt={article.title}
									/>
								</div>
							</Link>
							<div className="single-article-info">
								<Link to={article.link}>
									<h2>{article.title}</h2>
								</Link>
								<p>{article.metaDescription}</p>
							</div>
						</div>
					);
				})}
			</div>

			<Footer />
		</React.Fragment>
	);
}

//Export
export default Articles;
