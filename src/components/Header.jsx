//Init
import React, { useEffect, useState } from "react";

//Style
import "../style/Header.css";

//Component
function Header({ heading, title, quote }) {
	//Initializing State to Animate Header
	let [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(true);
	}, []);

	return (
		<header id="header">
			<div className={`header-container ${visible && "header-true"}`}>
				<div className="header-title">
					<span>{heading}</span>
				</div>
				<div className="header-developer">
					<span>{title}</span>
				</div>
				<div className="header-quote">
					<span>{quote}</span>
				</div>
			</div>
		</header>
	);
}

//Component
export default Header;
