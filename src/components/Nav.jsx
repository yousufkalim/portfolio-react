import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Gallery
import logo from "../images/logo.png";

function Nav() {
	//Initialinzing Scroll State
	let [scroll, setScroll] = useState(false);

	//Handle Scroll
	const handleScroll = () => {
		if (window.scrollY > 2) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	//useEffect to Event Listen
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={scroll && "scroll"}>
			<div className="logo-container">
				<Link to="/">
					<img src={logo} alt="Logo" />
				</Link>
			</div>

			<div className="nav-icons-container">
				<div className="nav-add-icon">
					<div className="nav-toggle-plus"></div>
					<div className="nav-toggle-minus"></div>
				</div>
				<div className="nav-view-icon">
					<div className="nav-toggle-line"></div>
					<div className="nav-toggle-line"></div>
					<div className="nav-toggle-line"></div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
