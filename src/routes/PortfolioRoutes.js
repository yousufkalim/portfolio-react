//Init
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import fetch from "../controllers/dataFetch";

//Component
import PortfolioProject from "../pages/PortfolioProject";

//Routing
function PortfolioRoutes() {
	//Initializing State
	let [portfolio, setPortfolio] = useState([]);

	//Getting data from database
	useEffect(() => {
		fetch("portfolios", setPortfolio);
	}, []);

	return (
		<Switch>
			{portfolio.map((item, index) => {
				return (
					<Route
						exact
						path={item.link}
						render={() => (
							<PortfolioProject
								key={index}
								cover={item.cover}
								skills={item.skills}
								category={item.category}
								copyright={item.copyright}
								weburl={item.weburl}
								heading={item.heading}
								description={item.description}
							/>
						)}
					/>
				);
			})}
		</Switch>
	);
}

//Export
export default PortfolioRoutes;
