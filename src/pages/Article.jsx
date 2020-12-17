//Init
import React from "react";
import { Link } from "react-router-dom";
import ReactHTMLParser from "react-html-parser";

//Data
import { about } from "../data/home";
import contactMe from "../data/contactMe";

//Components
import Nav from "../components/Nav";
import { RecentProjects } from "../components/PlusMenu";
import { ContactCredentials } from "../pages/ContactMe";
import { SocialLinks } from "../components/Footer";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

//Style
import "../style/Article.css";

//Component
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

				<div className="article-content">
					{/* Article */}
					<div className="single-article-page-container">
						{ReactHTMLParser(blog)}
						<i style={{ marginTop: "40px", display: "block" }}>
							Published: {date}
						</i>
					</div>

					{/* Aside */}
					<aside>
						<div className="sidebar">
							<h3>About Me</h3>
							<div className="aside-border"></div>
							<p>{about.columnOne}</p>
							<RecentProjects />
							<h3>Contact Details</h3>
							<div className="aside-border"></div>
							<ContactCredentials />
							<span>{contactMe.address}</span>
							<SocialLinks />
							<h3>Lets Talk</h3>
							<div className="aside-border"></div>
							<Link to="/contact">
								<button>CONTACT ME</button>
							</Link>
						</div>
					</aside>
				</div>
			</div>

			<div className="article-contact">
				<Contact />
			</div>

			<Footer />
		</React.Fragment>
	);
}

//Export
export default Article;
