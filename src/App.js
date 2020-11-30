//Init
import React from "react";

//Importing Routes
import PageRoutes from "./routes/PageRoutes";
import PortfolioRoutes from "./routes/PortfolioRoutes";

//Styles
import "./Style/App.css";

//Component
function App() {
	return (
		<React.Fragment>
			<PageRoutes />
			<PortfolioRoutes />
		</React.Fragment>
	);
}

export default App;
