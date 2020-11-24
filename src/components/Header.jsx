import React from "react";

//Style
import "../Style/Header.css";

function Header() {
	return (
		<header>
			<div className="header-container">
				<div className="header-title">
					<span>A FREELANCER</span>
				</div>
				<div className="header-developer">
					<span>Web Developer</span>
				</div>
				<div className="header-qoute">
					<span>
						IF IT DOESN’T CHALLENGE YOU, IT DOESN’T CHANGE YOU
					</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
