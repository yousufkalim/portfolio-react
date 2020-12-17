//Init
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Menu Button Components
import PlusMenu from "./PlusMenu";
import Hamburger from "./Hamburger";

//Style
import "../style/Nav.css";

function Nav() {
	//Initialinzing Scroll State
	let [scroll, setScroll] = useState(false);

	//State for Plus Icon
	let [plusClicked, setPlusClicked] = useState(false);

	//State for Hamburger Navigation
	let [hamClicked, setHamClicked] = useState(false);

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
		<>
			<nav className={scroll && "scroll"}>
				<div className="logo-container">
					<Link to="/">
						<span>{"< YousufKalim />"}</span>
					</Link>
				</div>

				<div className="nav-icons-container">
					<div
						className={`nav-add-icon ${
							plusClicked && "plus-clicked"
						}`}
						onClick={() => setPlusClicked((prev) => !prev)}
					>
						<div className="nav-toggle-plus"></div>
						<div className="nav-toggle-minus"></div>
					</div>
					<div
						className={`nav-view-icon ${
							hamClicked && "ham-clicked"
						}`}
						onClick={() => setHamClicked((prev) => !prev)}
					>
						<div className="nav-toggle-line first-line"></div>
						<div className="nav-toggle-line second-line"></div>
						<div className="nav-toggle-line third-line"></div>
					</div>
				</div>
			</nav>

			{/* Side bar on Plus Icon */}
			<PlusMenu clicked={plusClicked} setClicked={setPlusClicked} />

			{/* Hamburger Navigation */}
			<Hamburger clicked={hamClicked} />
		</>
	);
}

export default Nav;
