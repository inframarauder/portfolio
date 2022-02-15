import React from "react";
import { External } from "./Icons";

const Home = () => {
	return (
		<div className="grid grid-cols-1 text-secondary min-h-screen">
			<div className="mx-auto w-full py-6 bg-shaded flex flex-col items-center">
				<h1 className="text-4xl text-center my-20 p-2 ">
					<p>Hi, I am Subhasis 🙋</p>
					<p className=" my-2 text-xs md:text-xl">
						Fullstack Devloper 👨🏽‍💻 | DevOps Engineer ☁️ | Web3.0 Enthusiast 🔗
					</p>
				</h1>
				<img
					src="/me.jpg"
					height={350}
					width={350}
					className="border-8 border-highlight rounded-full object-fill"
				/>

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
		</div>
	);
};

export default Home;
