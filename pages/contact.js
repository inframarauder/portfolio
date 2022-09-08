import React, { useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		try {
			await axios.post("/api/contact", { name, email, message });
			setSubmitted(true);
		} catch (error) {
			console.error(error);
			if (error.response.data) {
				alert(error.response.data.error);
			} else {
				alert("Something went wrong!");
			}
		}
		setLoading(false);
	};

	return (
		<div className="container min-h-screen bg-primary">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-center text-3xl py-4 text-highlight">Contact</h1>
				<p className="text-center text-secondary text-lg px-4">
					Drop me a message below and I will get back to you at the earliest.{" "}
				</p>

				{loading ? (
					<Loader />
				) : (
					<div className="flex flex-col justify-center items-center my-8 px-4 w-full md:w-1/2">
						{submitted ? (
							<div className="text-center text-lg text-secondary">
								Thank you for your message. I will get back to you as soon as
								possible :)
							</div>
						) : (
							<form
								onSubmit={handleSubmit}
								className="flex flex-col justify-center border-4 border-highlight rounded-lg w-full "
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
										rows={7}
										placeholder="Hi, I am John Doe. I am a looking for a web developer for my project. Lets get in touch!"
									></textarea>
								</div>
								<div className="flex justify-center item-center py-4 px-4">
									<button
										type="submit"
										className="bg-highlight text-white font-bold py-2 px-2 rounded-lg"
									>
										Submit
									</button>
								</div>
							</form>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Contact;
