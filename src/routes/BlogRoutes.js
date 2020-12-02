//Init
import React from "react";
import { Switch, Route } from "react-router-dom";

// Data
import blog from "../data/blog";

// Components
import Article from "../pages/Article";
import ErrorPage from "../pages/ErrorPage";

// Component
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

			{/* 404 Route */}
			<Route path="/blog/*" component={ErrorPage} />
		</Switch>
	);
}

export default BlogRoutes;
