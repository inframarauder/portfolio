import React from "react";
import CertificationCard from "./CertificationCard";

const Certifications = ({ certifications }) => {
	return (
		<div className="bg-shaded text-secondary min-h-screen">
			<div className="mx-auto w-full py-6 bg-shaded flex flex-col items-center">
				<h1 className="text-center text-4xl py-4 my-20">Certifications</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{certifications.map((certification, index) => (
						<CertificationCard key={index} certification={certification} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Certifications;
