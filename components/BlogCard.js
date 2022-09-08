import React from "react";
import { External } from "./Icons";

const BlogCard = ({ blog }) => {
	return (
		<div className="bg-primary border-2 border-highlight rounded-xl m-4 p-2">
			<div className="p-4">
				<h3 className="text-2xl font-bold text-highlight">{blog.title}</h3>
				<p className="text-sm my-4 font-bold text-secondary">
					{blog.description}
				</p>

				<div className="flex justify-end items-center my-2">
					<a
						href={blog.link}
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2"
					>
						<button className="bg-highlight text-white font-bold py-2 px-2 rounded-lg flex justify-between items-center hover:text-lg transition duration-200 ease-out">
							<span className="mx-2">View Blog Post</span> <External />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
