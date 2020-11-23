//Init
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Pages
import Home from "./pages/Home";

//Styles
import "./Style/App.css";
import "./Style/Nav.css";

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
