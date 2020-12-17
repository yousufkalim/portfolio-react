//Init
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Data
import contact from "../data/contact";

//Actions
import { handleInput, handleSubmit } from "../controllers/contact";

//Style
import "../style/Contact.css";

//Form Component
function ContactForm() {
	//Initializing States
	let [input, setInput] = useState({ name: "", email: "", phone: "" });
	let [loading, setLoading] = useState(false);
	let [submit, setSubmit] = useState("");

	return (
		<div className="contact-form">
			<form
				onSubmit={(e) =>
					handleSubmit(e, input, setSubmit, setInput, setLoading)
				}
			>
				<input
					type="text"
					name="name"
					placeholder="NAME"
					value={input.name}
					onChange={(e) => handleInput(e, setInput)}
					required
				/>
				<input
					type="text"
					name="email"
					placeholder="EMAIL"
					value={input.email}
					onChange={(e) => handleInput(e, setInput)}
					required
				/>
				<input
					type="text"
					name="phone"
					placeholder="PHONE"
					value={input.phone}
					onChange={(e) => handleInput(e, setInput)}
					required
				/>
				{submit ? (
					submit
				) : (
					<button type="submit" disabled={loading}>
						{loading && <i className="fa fa-refresh fa-spin" />}
						&nbsp;LET'S TALK
					</button>
				)}
			</form>
		</div>
	);
}

//Contact Component
function Contact({ inHome }) {
	return (
		<section className="contact">
			<div className="contact-heading">
				<h1>{contact.title}</h1>
				<h3>{contact.tagline}</h3>
				<div
					className="border"
					style={{ borderColor: "#7a89ab" }}
				></div>
			</div>
			<div className="contact-container">
				<p>{contact.description}</p>

				{inHome ? (
					<ContactForm />
				) : (
					<Link to="/contact" className="contact-btn-link">
						<button className="contact-btn">LET'S TALK</button>
					</Link>
				)}
			</div>
		</section>
	);
}

//Export Components
export default Contact;
export { ContactForm };
