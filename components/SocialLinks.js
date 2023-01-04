import React from "react";

const SocialLinks = () => {
	return (
		<>
			<a
				href="https://github.com/subhasis020299"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-2 border-4 border-highlight rounded-full"
			>
				<img
					src="/github.png"
					alt="github"
					height={50}
					width={50}
					className="bg-secondary rounded-full p-1  hover:p-2 transition-all duration-200"
				/>
			</a>
			<a
				href="https://linkedin.com/in/subhasis020299"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-2 border-4 border-highlight rounded-full"
			>
				<img
					src="/linkedin.png"
					alt="linkedin"
					height={50}
					width={50}
					className="bg-secondary rounded-full p-1  hover:p-2 transition-all duration-200"
				/>
			</a>
			<a
				href="https://twitter.com/subhasis020299"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-2 border-4 border-highlight rounded-full"
			>
				<img
					src="/twitter.png"
					alt="twitter"
					height={50}
					width={50}
					className="bg-secondary rounded-full p-1  hover:p-2 transition-all duration-200"
				/>{" "}
			</a>
		</>
	);
};

export default SocialLinks;
