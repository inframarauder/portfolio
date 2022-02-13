import React from "react";
import { External } from "./Icons";

const CertificationCard = ({ certification }) => {
	return (
		<div className="bg-primary shadow-xl  m-4">
			<img
				src={certification.image}
				alt={certification.name}
				className="w-full h-64 object-contain bg-white"
			/>
			<div className="p-4">
				<h3 className="text-2xl font-bold">{certification.name}</h3>
				<h4 className="text-xl font-bold">{certification.issuedBy}</h4>
				<p className="text-md py-2">{certification.description}</p>

				<div className="flex justify-end items-center my-2">
					<a
						href={certification.url}
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2"
					>
						<button className="bg-highlight text-white font-bold py-2 px-2 rounded-lg flex justify-between items-center">
							<span className="mx-2">View Certificate</span> <External />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default CertificationCard;
