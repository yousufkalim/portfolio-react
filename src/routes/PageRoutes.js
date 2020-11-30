//Init
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Recent from "../pages/Recent";

//Component
function PageRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/portfolio" component={Recent} />
			{/* <Redirect to="/" /> */}
		</Switch>
	);
}

export default PageRoutes;
