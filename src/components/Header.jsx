//Init
import React from "react";

//Style
import "../Style/Header.css";

//Component
function Header({ heading, title, qoute }) {
	return (
		<header>
			<div className="header-container">
				<div className="header-title">
					<span>{heading}</span>
				</div>
				<div className="header-developer">
					<span>{title}</span>
				</div>
				<div className="header-qoute">
					<span>{qoute}</span>
				</div>
			</div>
		</header>
	);
}

//Component
export default Header;
