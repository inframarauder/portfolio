import React from "react";
import { External } from "./Icons";

const Footer = () => {
	return (
		<footer className="bg-primary flex flex-col justify-center items-start px-4">
			<div className="container mx-auto px-4 text-secondary text-center p-4">
				<span>Made with ❤️ by Subhasis Das</span>

				<div className="container mx-auto px-4 text-secondary text-center p-4 flex justify-center items-center">
					<a
						href="https://github.com/subhasis020299"
						target="_blank"
						rel="noopener noreferrer"
						className=" flex justify-center items-center  hover:underline hover:text-lg hover:text-highlight transition duration-150 ease-in-out"
					>
						<span className="mx-2">GitHub</span> <External />
					</a>
					<a
						href="https://linkedin.com/in/subhasis020299"
						target="_blank"
						rel="noopener noreferrer"
						className=" flex justify-center items-center  hover:underline hover:text-lg hover:text-highlight transition duration-150 ease-in-out"
					>
						<span className="mx-2">LinkedIn</span> <External />
					</a>
					<a
						href="https://twitter.com/geram_er_chhele"
						target="_blank"
						rel="noopener noreferrer"
						className=" flex justify-center items-center  hover:underline hover:text-lg hover:text-highlight transition duration-150 ease-in-out"
					>
						<span className="mx-2">Twitter</span> <External />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
