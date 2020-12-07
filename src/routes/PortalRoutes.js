//Init
import React from "react";
import { Switch, Route } from "react-router-dom";

//Component
import ErrorPage from "../pages/ErrorPage";
import Article from "../portal/Article";

//Routing
function PortalRoutes() {
	return (
		<Switch>
			{/* Routes */}
			<Route path="/portal/article" component={Article} />

			{/* 404 Route */}
			<Route path="/portal/*" component={ErrorPage} />
		</Switch>
	);
}

//Export
export default PortalRoutes;
