import React from "react";

const About = () => {
	return (
		<div className="grid grid-cols-1 text-secondary min-h-screen">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl text-center my-8 p-2 ">About Me</h1>
				<div className="md:w-1/2 ">
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
		</div>
	);
};

export default About;
