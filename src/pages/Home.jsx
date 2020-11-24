//Init
import React from "react";

//data
import { header, about } from "../data/home";

//Components
import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";

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
		</React.Fragment>
	);
}

export default Home;
