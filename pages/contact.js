import React, { useState } from "react";
import { External } from "../components/Icons";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, message);
	};

	return (
		<div className="container min-h-screen bg-primary">
			<legend className="text-center text-3xl py-4 text-secondary">
				Contact
			</legend>
			<p className="text-center text-secondary text-lg px-4">
				Drop me a message below and I will get back to you at the earliest.{" "}
				<br />
				You can also find me around the web ...{" "}
				<span className="flex justify-center">
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
				</span>
			</p>
			<div className="flex flex-col justify-center items-center my-8 p-8">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col justify-center border-4 border-highlight rounded-lg p-4 w-full  md:w-1/2"
				>
					<div className="flex flex-col py-4 px-4">
						<label className="text-secondary text-lg">Name</label>
						<input
							type="text"
							className="w-full p-2 border border-highlight rounded"
							placeholder="John Doe"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required={true}
						/>
					</div>
					<div className="flex flex-col py-4 px-4">
						<label className="text-secondary text-lg">Email</label>
						<input
							type="email"
							className="w-full p-2 border border-highlight rounded"
							placeholder="john@doe.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required={true}
						/>
					</div>
					<div className="flex flex-col py-4 px-4">
						<label className="text-secondary text-lg">Message</label>
						<textarea
							required={true}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="w-full p-2 border border-highlight rounded"
							rows={4}
							placeholder="Hi, I am John Doe. I am a looking for a web developer for my project. Lets get in touch!"
						></textarea>
					</div>
					<div className="flex justify-center item-center py-4 px-4">
						<button
							type="submit"
							className="bg-highlight text-white font-bold py-2 px-2 rounded-lg"
						>
							Submit{" "}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
