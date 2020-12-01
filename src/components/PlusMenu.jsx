//init
import React from "react";
import { Link } from "react-router-dom";

//Data
import portfolio from "../data/portfolio";
import blog from "../data/blog";

//Style
import "../Style/PlusMenu.css";

//Recent Projects
function RecentProjects() {
	return (
		<div className="plus-recent">
			<h3 className="plus-heading">RECENT WORKS</h3>
			{portfolio.map((item) => {
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
						<li>
							<Link to={blog[0].link}>{blog[0].title}</Link>
						</li>
						<li>
							<Link to={blog[1].link}>{blog[1].title}</Link>
						</li>
						<li>
							<Link to={blog[2].link}>{blog[2].title}</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

//Export
export default PlusMenu;
export { RecentProjects };
