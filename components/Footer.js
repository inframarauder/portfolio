import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
	return (
		<footer className="bg-primary flex flex-col justify-center items-start px-4">
			<div className="container mx-auto px-4 text-secondary text-center p-4">
				<span>Made with ❤️ by Subhasis Das</span>

				<div className="container mx-auto px-4 text-secondary text-center p-4 flex justify-center items-center">
					<SocialLinks />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
