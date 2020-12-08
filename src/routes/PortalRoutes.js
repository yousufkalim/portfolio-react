//Init
import React from "react";
import { Switch, Route } from "react-router-dom";

//Component
import ErrorPage from "../pages/ErrorPage";
import Article from "../portal/Article";
import Portfolio from "../portal/Portfolio";
import Quote from "../portal/Quote";

//Routing
function PortalRoutes() {
	return (
		<Switch>
			{/* Routes */}
			<Route path="/portal/article" component={Article} />
			<Route path="/portal/portfolio" component={Portfolio} />
			<Route path="/portal/quote" component={Quote} />

			{/* 404 Route */}
			<Route path="/portal/*" component={ErrorPage} />
		</Switch>
	);
}

//Export
export default PortalRoutes;
