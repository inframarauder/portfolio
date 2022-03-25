import React from "react";
import { External } from "./Icons";

const CertificationCard = ({ certification }) => {
	return (
		<div className="bg-primary border-2 border-highlight rounded-xl m-4 p-2">
			<img
				src={certification.image}
				alt={certification.name}
				className="w-full h-64 object-contain bg-white"
			/>
			<div className="p-4">
				<h3 className="text-2xl font-bold text-highlight">
					{certification.name}
				</h3>
				<h4 className="text-lg">Issued By : {certification.issuedBy}</h4>

				<div className="flex justify-end items-center my-2">
					<a
						href={certification.url}
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2"
					>
						<button className="bg-highlight text-white font-bold py-2 px-2 rounded-lg flex justify-between items-center hover:text-lg transition duration-200 ease-out">
							<span className="mx-2">View Certificate</span> <External />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default CertificationCard;
