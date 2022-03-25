import React from "react";

const About = () => {
	return (
		<div className="flex flex-col justify-center items-center text-secondary min-h-screen">
			<h1 className="text-4xl text-center mt-10 py-16 text-highlight">
				About Me
			</h1>
			<div className="w-full md:w-4/5">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="px-4">
						<img
							src="me_with_mic.jpg"
							alt="me"
							width={550}
							className="border-8 border-highlight object-fill max-h-80"
						/>
					</div>
					<div className="text-lg text-justify px-4 py-4">
						<p className="py-2">
							I am a passionate software engineer who loves solving real world
							problems by writing code. I love architecting and building
							applications that work efficiently at scale and add value to the
							world.
						</p>
						<p className="py-2">
							I graduated from{" "}
							<a
								href="https://www.heritageit.edu/"
								target="_blank"
								rel="noreferrer"
								className="cursor-pointer hover:text-highlight hover:underline transition duration-200"
							>
								Heritage Institute of Technology, Kolkata
							</a>{" "}
							with a Bachelors in Computer Science and Engineering in 2021. I
							was actively involved with developer communities like{" "}
							<a
								href="https://dschit.com/"
								target="_blank"
								rel="noreferrer"
								className="cursor-pointer hover:text-highlight hover:underline transition duration-200"
							>
								DSC HIT
							</a>{" "}
							and{" "}
							<a
								href="https://gdgkolkata.org/"
								target="_blank"
								rel="noreferrer"
								className="cursor-pointer hover:text-highlight hover:underline transition duration-200"
							>
								GDG Kolkata
							</a>
							, during my college days. I am currently working full-time as a
							DevOps Engineer at{" "}
							<a
								href="https://tcs.com/"
								target="_blank"
								rel="noreferrer"
								className="cursor-pointer hover:text-highlight hover:underline transition duration-200"
							>
								Tata Consultancy Services.
							</a>
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="text-lg text-justify px-4 py-4">
						<p className="py-2">
							My expertise lies in fullstack development using Javascript
							(specifically Node.js, MongoDB, React) and cloud and devops
							engineering (AWS, Docker, Kubernetes, Terraform). I have desgined,
							developed and deployed full-scale microservices as well as
							web-applications.
						</p>
						<p className="py-2">
							I am a huge fan of serverless technologies and infrastructure
							automation (IaC). I am also familiar with Python, Java and C++.
						</p>
						<p className="py-2">
							I am currently upskilling to learn and adapt to Web3.0 with
							technologies like Ethereum, Solidity and Web3JS
						</p>
					</div>
					<div className="py-8 px-4">
						<img
							src="/skills.png"
							alt="skills"
							width={550}
							className="border-8 border-highlight bg-secondary object-fill max-h-80"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
