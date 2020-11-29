//init
import React, { useState } from "react";

//Data
import portfolio from "../data/portfolio";
import blog from "../data/blog";

//Style
import "../Style/PlusMenu.css";

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
						I’m a certified Software Engineer from the University of
						Lahore, I did BSSE in 2014 and I’m doing my work on
						regular bases, I have over six years of experience in
						Web Designing and Development, I build websites in
						MongoDB, ExpressJS, ReactJS and NodeJS Stack.
					</p>
				</div>

				{/* Recent Section */}
				<div className="plus-recent">
					<h3 className="plus-heading">RECENT WORKS</h3>
					{portfolio.map((item) => {
						return (
							<a href={item.link}>
								<img
									src={item.thumbnail}
									alt="Portfolio Item"
								/>
							</a>
						);
					})}
				</div>

				{/* Posts Section */}
				<div className="plus-posts">
					<h3 className="plus-heading">RECENT POSTS</h3>
					<ul type="">
						<li>
							<a
								href="http://blog.kalim.pk"
								target="_blank"
								rel="noreferrer"
							>
								{blog[0].title}
							</a>
						</li>
						<li>
							<a
								href="http://blog.kalim.pk"
								target="_blank"
								rel="noreferrer"
							>
								{blog[1].title}
							</a>
						</li>
						<li>
							<a
								href="http://blog.kalim.pk"
								target="_blank"
								rel="noreferrer"
							>
								{blog[2].title}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

//Export
export default PlusMenu;
