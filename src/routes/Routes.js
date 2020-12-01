//Init
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Importing Routes
import PortfolioRoutes from "./PortfolioRoutes";
import BlogRoutes from "./BlogRoutes";

//Pages
import Home from "../pages/Home";
import Recent from "../pages/Recent";
import Articles from "../pages/Articles";
import ContactMe from "../pages/ContactMe";

//Component
function PageRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/portfolio" component={Recent} />
			<Route exact path="/articles" component={Articles} />
			<Route exact path="/contact" component={ContactMe} />
			<Route exact path="/portfolio/*" component={PortfolioRoutes} />
			<Route exact path="/blog/*" component={BlogRoutes} />
			{/* <Redirect to="/" /> */}
		</Switch>
	);
}

export default PageRoutes;
