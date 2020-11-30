//Init
import React from "react";

//Data
import { header } from "../data/recent";

//Components
import Nav from "../components/Nav";
import HeaderGlobal from "../components/HeaderGlobal";
import InspiredHeading from "../components/InspiredHeading";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

//Recent Component
function Recent() {
	return (
		<React.Fragment>
			<Nav />
			<HeaderGlobal title={header.title} quote={header.quote} />

			<InspiredHeading />

			<Portfolio />

			<Contact />

			<Footer />
		</React.Fragment>
	);
}

//Export
export default Recent;
