import React from "react";
import SocialLinks from "./SocialLinks";

const Home = () => {
	return (
		<div className="mx-auto w-full py-6 bg-shaded text-secondary min-h-screen flex flex-col items-center">
			<h1 className="text-4xl text-center mt-10 p-2 ">
				<p className="text-highlight">Hi, I am Subhasis 🙋</p>
				<p className=" my-2 text-xs md:text-xl">
					DevOps Engineer ☁️ | Platform Engineer 🚉 | Fullstack Devloper 👨🏽‍💻
				</p>
			</h1>
			<img
				src="/me.jpg"
				height={350}
				width={350}
				className="border-8 border-highlight rounded-full object-fill"
			/>

			<div className="container mx-auto px-4 text-secondary text-center p-4 flex justify-center items-center">
				<SocialLinks />
			</div>
		</div>
	);
};

export default Home;
