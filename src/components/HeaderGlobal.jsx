//Init
import React, { useState, useEffect } from "react";

//Style
import "../Style/HeaderGlobal.css";

//Component
function HeaderGlobal({ inPortfolio, title, quote }) {
	//Initializing State to Animate Header Content
	let [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(true);
	}, []);

	return (
		<header id="header-global">
			<div
				className={`header-global-container ${
					inPortfolio && "inPortfolio"
				}`}
			>
				<div
					className={`header-global-transition ${
						visible && "header-global-true"
					}`}
				>
					<div className="header-global-title">
						<span>{title}</span>
					</div>
					<div className="header-global-quote">
						<span>{quote}</span>
					</div>
				</div>
			</div>
		</header>
	);
}

//Export
export default HeaderGlobal;
