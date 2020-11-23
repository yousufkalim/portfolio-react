import React from "react";
import { Link } from "react-router-dom";

//Material Icons
import AddIcon from "@material-ui/icons/Add";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";

//Gallery
import logo from "../images/logo.png";

function Nav() {
	return (
		<nav>
			<div className="logo-container">
				<Link to="/">
					<img src={logo} />
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
