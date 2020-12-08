//Init
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

//Component
import PortfolioProject from "../pages/PortfolioProject";
import ErrorPage from "../pages/ErrorPage";

//Routing
function PortfolioRoutes() {
	//Initializing State
	let [portfolio, setPortfolio] = useState([]);

	//Getting data from database
	useEffect(() => {
		axios.get("/portfolio").then((res) => {
			setPortfolio([...res.data]);
		});
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

			{/* 404 Route */}
			<Route path="/portfolio/*" component={ErrorPage} />
		</Switch>
	);
}

//Export
export default PortfolioRoutes;
