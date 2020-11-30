//Init
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Importing Routes
import PortfolioRoutes from "./PortfolioRoutes";

//Pages
import Home from "../pages/Home";
import Recent from "../pages/Recent";
import Articles from "../pages/Articles";

//Component
function PageRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/portfolio" component={Recent} />
			<Route exact path="/articles" component={Articles} />
			<Route exact path="/portfolio/*" component={PortfolioRoutes} />
			{/* <Redirect to="/" /> */}
		</Switch>
	);
}

export default PageRoutes;
