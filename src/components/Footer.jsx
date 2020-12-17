//Init
import React, { useState, useEffect } from "react";

//Importing Data
import footer from "../data/footer";

//Style
import "../style/Footer.css";

//Social Links
function SocialLinks() {
	return (
		<div className="social-links">
			<a href={footer.linkedIn} target="_blank" rel="noreferrer">
				<span className="tooltip">linkedIn</span>
				<i class="fab fa-linkedin-in"></i>
			</a>
			<a href={footer.facebook} target="_blank" rel="noreferrer">
				<span className="tooltip">facebook</span>
				<i class="fab fa-facebook-f"></i>
			</a>
			<a href={footer.twitter} target="_blank" rel="noreferrer">
				<span className="tooltip">twitter</span>
				<i class="fab fa-twitter"></i>
			</a>
			<a href={footer.instagram} target="_blank" rel="noreferrer">
				<span className="tooltip">instagram</span>
				<i class="fab fa-instagram"></i>
			</a>
		</div>
	);
}

//Footer Component
function Footer() {
	//Initializing state to change z-index of footer on scroll
	let [index, setIndex] = useState("-3");

	//handle scroll
	const handleScroll = () => {
		if (window.scrollY > 1000) {
			setIndex("-1");
		} else {
			setIndex("-3");
		}
	};

	//Scroll Listener
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	//Return Component
	return (
		<footer style={{ zIndex: index }}>
			<div className="footer-container">
				<p>{footer.copyright}</p>
				<SocialLinks />
			</div>
		</footer>
	);
}

//Export
export default Footer;
export { SocialLinks };
