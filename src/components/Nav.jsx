import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Material Icons
import AddIcon from "@material-ui/icons/Add";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";

//Gallery
import logo from "../images/logo.png";

function Nav() {
	//Initialinzing Scroll State
	let [scroll, setScroll] = useState(false);

	//useEffect to Event Listen
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 2) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		});
		return () => {
			window.removeEventListener("scroll");
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
					<AddIcon />
				</div>
				<div className="nav-view-icon">
					<ViewHeadlineIcon />
				</div>
			</div>
		</nav>
	);
}

export default Nav;
