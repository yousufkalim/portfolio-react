//Init
import React from "react";
import { Link } from "react-router-dom";

//Nav
import Nav from "./Nav";

function Portal() {
	return (
		<>
			<Nav />

			<div className="hamburger hamburger-active">
				<div className="links-container">
					<Link to="/portal">Home</Link>
					<Link to="/portal/portfolio">Portfolio</Link>
					<Link to="/portal/article">Article</Link>
					<Link to="/portal/quote">Quote</Link>
				</div>
			</div>
		</>
	);
}

export default Portal;
