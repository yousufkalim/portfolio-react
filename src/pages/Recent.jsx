//Init
import React from "react";

//Data
import { header } from "../data/recent";

//Components
import Nav from "../components/Nav";
import HeaderGlobal from "../components/HeaderGlobal";
import SkewedHeading from "../components/SkewedHeading";
import Portfolio from "../components/Portfolio";

//Recent Component
function Recent() {
	return (
		<React.Fragment>
			<Nav />
			<HeaderGlobal title={header.title} quote={header.quote} />
		</React.Fragment>
	);
}

//Export
export default Recent;
