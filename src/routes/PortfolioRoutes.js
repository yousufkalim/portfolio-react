//Init
import React from "react";
import { Switch, Route } from "react-router-dom";

//Component
import PortfolioProject from "../pages/PortfolioProject";

//Data
import portfolio from "../data/portfolio";

//Routing
function PortfolioRoutes() {
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
								webLink={item.webLink}
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
