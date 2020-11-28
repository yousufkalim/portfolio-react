//Init
import React from "react";

//Importing Data
import footer from "../data/footer";

//Style
import "../Style/Footer.css";

//Footer Component
function Footer() {
	return (
		<footer>
			<p>{footer.copyright}</p>
			<div className="social-links">
				<a href={footer.linkedIn} target="_blank">
					<span className="tooltip">linkedIn</span>
					<i class="fab fa-linkedin-in"></i>
				</a>
				<a href={footer.facebook} target="_blank">
					<span className="tooltip">facebook</span>
					<i class="fab fa-facebook-f"></i>
				</a>
				<a href={footer.twitter} target="_blank">
					<span className="tooltip">twitter</span>
					<i class="fab fa-twitter"></i>
				</a>
				<a href={footer.instagram} target="_blank">
					<span className="tooltip">instagram</span>
					<i class="fab fa-instagram"></i>
				</a>
			</div>
		</footer>
	);
}

//Export
export default Footer;
