//Init
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

//Fetch Data
import fetch from "../controllers/dataFetch";

// Components
import Article from "../pages/Article";

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
								date={article.dateCreated}
							/>
						)}
					/>
				);
			})}
		</Switch>
	);
}

export default BlogRoutes;
