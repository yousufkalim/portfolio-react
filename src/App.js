//Init
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Pages
import Home from "./pages/Home";

//Component
function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Redirect to="/" />
		</Switch>
	);
}

export default App;
