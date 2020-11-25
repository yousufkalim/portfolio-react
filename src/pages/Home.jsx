//Init
import React from "react";

//data
import { header, about, work, recent } from "../data/home";

//Importing Components
import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Recent from "../components/Recent";
import Portfolio from "../components/Portfolio";

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

			<Recent title={recent.title} tagline={recent.tagline} />

			<Portfolio />
		</React.Fragment>
	);
}

//Export
export default Home;
