//Init
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

//Fetch Data
import fetch from "../controllers/dataFetch";

// Components
import Article from "../pages/Article";
import ErrorPage from "../pages/ErrorPage";

// Component
function BlogRoutes() {
	let [blog, setBlog] = useState([]);

	useEffect(() => {
		fetch("articles", setBlog);
	}, []);

	return (
		<Switch>
			{blog.map((article, index) => {
				return (
					<Route
						exact
						path={article.link}
						render={() => (
							<Article
								key={index}
								image={article.image}
								title={article.title}
								blog={article.blog}
							/>
						)}
					/>
				);
			})}

			{/* 404 Route */}
			{/* <Route path="/blog/*" component={ErrorPage} /> */}
		</Switch>
	);
}

export default BlogRoutes;
