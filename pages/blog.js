import React from "react";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";

const Blog = () => {
	return (
		<div className="container min-h-screen bg-primary">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-3xl py-4 text-highlight text-center">Blog</h1>
				<p className="text-center text-secondary text-lg px-4">
					I am an avid technical writer and I love writing technical articles on
					various topics spanning across DevOps and full-stack development.
				</p>
				<p className=" text-secondary px-4 py-4 text-3xl"> Recent Blogs</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{/**blog card */}
					{blogs.map((blog,i) => (
						<BlogCard key={i} blog={blog} />
					))}
				</div>
				<p className="text-center text-secondary text-lg px-4 my-4">
					More on my{" "}
					<a
						href="https://subhasisdas125.medium.com/"
						target="_blank"
						rel="noreferrer"
						className="cursor-pointer hover:text-highlight hover:underline transition duration-200"
					>
						personal blog.
					</a>
				</p>
			</div>
		</div>
	);
};

export default Blog;
