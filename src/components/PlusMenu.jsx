//init
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Data
import fetch from "../controllers/dataFetch";

//Style
import "../Style/PlusMenu.css";

//Recent Projects
function RecentProjects() {
	let [portfolio, setPortfolio] = useState([]);

	useEffect(() => {
		fetch("portfolios", setPortfolio);
	}, []);

	return (
		<div className="plus-recent">
			<h3 className="plus-heading">RECENT WORKS</h3>
			{portfolio.slice(0, 6).map((item) => {
				return (
					<a href={item.link}>
						<img src={item.thumbnail} alt="Portfolio Item" />
					</a>
				);
			})}
		</div>
	);
}

//Component
function PlusMenu({ clicked, setClicked }) {
	let [blog, setBlog] = useState([]);

	useEffect(() => {
		fetch("articles", setBlog);
	}, []);

	return (
		<div className="plus-menu" style={clicked ? { width: "300px" } : null}>
			<div className="plus-menu-container">
				{/* Close Button */}
				<span className="close-btn" onClick={() => setClicked(false)}>
					<i class="fas fa-times"></i>
				</span>

				{/* About Section */}
				<div className="plus-about">
					<h3 className="plus-heading">ABOUT MY WORK</h3>
					<p>
						I’m full-stack web developer, I’m doing my work on
						regular bases, I have over six years of experience in
						Web Designing and Development, I build websites in MERN
						(MongoDB, ExpressJS, ReactJS and NodeJS) Stack.
					</p>
				</div>

				{/* Recent Section */}
				<RecentProjects />

				{/* Posts Section */}
				<div className="plus-posts">
					<h3 className="plus-heading">RECENT POSTS</h3>
					<ul type="">
						{blog.slice(0, 3).map((item, index) => {
							return (
								<li>
									<Link to={item.link}>{item.title}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

//Export
export default PlusMenu;
export { RecentProjects };
