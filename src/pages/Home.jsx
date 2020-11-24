//Init
import React from "react";

//data
import { header, about, work } from "../data/home";

//Components
import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";

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
		</React.Fragment>
	);
}

export default Home;
