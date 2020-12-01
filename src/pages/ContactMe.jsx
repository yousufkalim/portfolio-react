//Init
import React from "react";
import { Link } from "react-router-dom";

//Data
import contactMe from "../data/contactMe";

//Style
import "../Style/ContactMe.css";

//Components
import Nav from "../components/Nav";
import HeaderGlobal from "../components/HeaderGlobal";
import { ContactForm } from "../components/Contact";
import { SocialLinks } from "../components/Footer";
import Footer from "../components/Footer";

//Contact Credentials
function ContactCredentials() {
	return (
		<div className="contact-credentials">
			<p>Phone: {contactMe.phone}</p>
			<p>
				Email:{" "}
				<a href={`mailto:${contactMe.email}`}>{contactMe.email}</a>
			</p>
			<p>
				Web: <Link to="/">{contactMe.web}</Link>
			</p>
		</div>
	);
}

// Component
function ContactMe() {
	return (
		<React.Fragment>
			<Nav />
			<HeaderGlobal title="Let’s Talk" quote="JUST DROP ME A LINE" />
			<section className="contact-me">
				<div className="contact-me-container">
					<div className="contact-info">
						<span>{contactMe.title}</span>
						<div>{contactMe.description}</div>
					</div>
					<div className="contact-me-form">
						<ContactForm />
					</div>
				</div>
			</section>

			{/* Contact Details */}
			<section className="contact-details">
				<div className="contact-details-container">
					<div className="contact-details-card">
						<h2>Let's Talk.</h2>
						<div className="contact-border"></div>
						<h6>CONTACT DETAILS</h6>
						<ContactCredentials />
					</div>
					<div className="contact-details-card">
						<h2>Connect.</h2>
						<div className="contact-border"></div>
						<h6>SOCIAL PRESENCE</h6>
						<div className="social-credentials">
							<SocialLinks />
						</div>
					</div>
					<div className="contact-details-card">
						<h2>Find Me.</h2>
						<div className="contact-border"></div>
						<h6>ADDRESS</h6>
						<p className="contact-address">{contactMe.address}</p>
					</div>
				</div>
			</section>

			<Footer />
		</React.Fragment>
	);
}

//Export
export default ContactMe;
export { ContactCredentials };
