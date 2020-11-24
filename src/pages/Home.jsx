//Init
import React from "react";

//Components
import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";

function Home() {
	return (
		<React.Fragment>
			<Nav />
			<Header />
			<About />
		</React.Fragment>
	);
}

export default Home;
