import React from "react";
import { NavLink } from "react-router-dom";

//Style
import "../Style/Hamburger.css";

function Hamburger({ clicked }) {
	return (
		<div className={`hamburger ${clicked && "hamburger-active"}`}>
			<div className="links-container">
				<NavLink exact to="/" activeClassName="active_class">
					Home
				</NavLink>
				<NavLink exact to="/portfolio" activeClassName="active_class">
					Portfolio
				</NavLink>
				<NavLink exact to="/articles" activeClassName="active_class">
					Articles
				</NavLink>
				<NavLink exact to="/contact" activeClassName="active_class">
					Let's Talk
				</NavLink>
			</div>
		</div>
	);
}

export default Hamburger;
