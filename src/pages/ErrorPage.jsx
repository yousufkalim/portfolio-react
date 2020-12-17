//Init
import React from "react";
import { Link } from "react-router-dom";

//Style
import "../style/ErrorPage.css";

//Components
import Nav from "../components/Nav";
import HeaderGlobal from "../components/HeaderGlobal";
import Footer from "../components/Footer";

// Component
function ErrorPage() {
	return (
		<React.Fragment>
			<Nav />
			<HeaderGlobal title="Error 404" />

			{/* Error Info */}
			<section className="error-page">
				<div className="error-page-container">
					<h1>Oops, This Page Could Not Be Found!</h1>
					<h2>404</h2>
					<div className="error-page-links">
						<h3>Helpful Links</h3>
						<ul>
							<li>
								<span>{">"}</span>
								<Link to="/">Home</Link>
							</li>
							<li>
								<span>{">"}</span>
								<Link to="/portfolio">Portfolio</Link>
							</li>
							<li>
								<span>{">"}</span>
								<Link to="/blog">Articles</Link>
							</li>
							<li>
								<span>{">"}</span>
								<Link to="/contact">Let's Talk</Link>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<Footer />
		</React.Fragment>
	);
}

// Export
export default ErrorPage;
