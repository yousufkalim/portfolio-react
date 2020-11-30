//Init
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Recent from "./pages/Recent";

//Styles
import "./Style/App.css";
import "./Style/Nav.css";

//Component
function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/portfolio" component={Recent} />
			<Redirect to="/" />
		</Switch>
	);
}

export default App;
