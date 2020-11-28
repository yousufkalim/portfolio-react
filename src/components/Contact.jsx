//Init
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Actions
import { handleInput, handleSubmit } from "../actions";

//Style
import "../Style/Contact.css";

//Form Component
function ContactForm() {
	//Initializing States
	let [input, setInput] = useState({ name: "", email: "", phone: "" });
	let [submit, setSubmit] = useState("");

	return (
		<div className="contact-form">
			<form onSubmit={(e) => handleSubmit(e, input, setSubmit, setInput)}>
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
				{submit ? submit : <button type="submit">LET'S TALK</button>}
			</form>
		</div>
	);
}

//Contact Component
function Contact({ title, tagline, description, inHome }) {
	return (
		<section className="contact">
			<div className="contact-heading">
				<h1>{title}</h1>
				<h3>{tagline}</h3>
				<div
					className="border"
					style={{ borderColor: "#7a89ab" }}
				></div>
			</div>
			<div className="contact-container">
				<p>{description}</p>

				{inHome ? (
					<ContactForm />
				) : (
					<Link to="/lets-talk" className="contact-btn-link">
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
