//Init
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//Importting Component to Scroll to top on Redirect
import ScrollToTop from "./components/ScrollToTop";

//Render
ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
