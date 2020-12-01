import React from "react";
import { Switch, Route } from "react-router-dom";

import blog from "../data/blog";

import Article from "../pages/Article";

function BlogRoutes() {
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
