import React, { useState } from "react";
import axios from "axios";

//Style
import "../Style/Post.css";

function Post() {
	let [blog, setBlog] = useState({
		image: "",
		title: "",
		description: "",
		blog: "",
	});

	const handleImage = (e) => {
		setBlog((prev) => {
			return {
				...prev,
				image: e.target.files[0],
			};
		});
	};

	const handleInput = (e) => {
		setBlog((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();

		for (const property in blog) {
			formData.append(property, blog[property]);
		}

		axios
			.post("/blog", formData)
			.then(() => {
				setBlog({
					image: "",
					title: "",
					description: "",
					blog: "",
				});
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="post">
			<form onSubmit={handleSubmit}>
				<input type="file" onChange={handleImage} />
				<input
					type="text"
					name="title"
					placeholder="title"
					value={blog.title}
					onChange={handleInput}
				/>
				<input
					type="text"
					name="description"
					placeholder="description"
					value={blog.description}
					onChange={handleInput}
				/>
				<textarea
					name="blog"
					cols="30"
					rows="10"
					placeholder="Blog"
					value={blog.blog}
					onChange={handleInput}
				></textarea>
				<button type="submit">Publish</button>
			</form>
		</div>
	);
}

export default Post;
