import React from "react";
import { External } from "./Icons";

const About = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 text-secondary min-h-screen">
			<div className="mx-auto w-full py-6 bg-shaded flex flex-col  items-center">
				<h1 className="text-4xl text-center my-8 p-2 ">
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
			<div>
				<h1 className="text-4xl text-center my-8 p-2 ">About Me</h1>
				<p className="text-lg text-justify my-auto px-4 py-4">
					I am a CSE graduate from{" "}
					<a
						href="https://www.heritageit.edu/"
						target="_blank"
						rel="noreferrer"
						className="cursor-pointer hover:text-highlight hover:underline transition duration-200"
					>
						Heritage Institute of Technology, Kolkata
					</a>
					{", "}
					currently working as a DevOps Engineer at{" "}
					<a
						href="https://tcs.com/"
						target="_blank"
						rel="noreferrer"
						className="cursor-pointer hover:text-highlight hover:underline transition duration-200"
					>
						Tata Consultancy Services.
					</a>
				</p>
				<p className="text-lg text-justify my-auto px-4 py-4">
					I am a passionate software engineer who loves solving real world
					problems by writing code. I love architecting and building
					applications that work efficiently at scale and add value to the
					world. My primary expertise lies in fullstack development using
					Javascript (specifically Node.js and React). I am also proficient in
					cloud and devops engineering using AWS.
				</p>
				<p className="text-lg text-justify my-auto px-4 py-4">
					These are the technologies that I regularly work with / have worked
					with in the past -
					<img
						src="/skills.png"
						className="border-8 border-highlight bg-secondary object-fill p-4 mx-auto my-10 w-full md:w-1/2"
					/>
					Apart from these, I am also a Web3.0 Enthusiast - exploring smart
					contracts using solidity and JS libraries like web3js.
				</p>
			</div>
		</div>
	);
};

export default About;
