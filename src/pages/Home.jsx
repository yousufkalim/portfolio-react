//Init
import React from "react";

//data
import { header, about, work, recent, expertAdvice } from "../data/home";

//Importing Components
import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import SkewedHeading from "../components/SkewedHeading";
import Portfolio from "../components/Portfolio";
import Quote from "../components/Quote";
import ExpertAdvice from "../components/ExpertAdvice";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

//Component
function Home() {
	return (
		<React.Fragment>
			<Nav />
			<Header
				heading={header.heading}
				title={header.title}
				qoute={header.qoute}
			/>

			<About columnOne={about.columnOne} columnTwo={about.columnTwo} />

			<Work
				title={work.title}
				tagline={work.tagline}
				description={work.descripttion}
			/>

			<SkewedHeading
				bgClass="recentBackground"
				title={recent.title}
				tagline={recent.tagline}
			/>

			{/* Sending in home status so we can show only 6 items in home */}
			<Portfolio inHome={true} />

			<Quote />

			<SkewedHeading
				bgClass="skewedBackground"
				title={expertAdvice.title}
				tagline={expertAdvice.tagline}
			/>

			<ExpertAdvice />

			<Contact inHome={true} />

			<Footer />
		</React.Fragment>
	);
}

//Export
export default Home;
