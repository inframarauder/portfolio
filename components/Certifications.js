import React from "react";
import CertificationCard from "./CertificationCard";

const Certifications = ({ certifications }) => {
	return (
		<div className="bg-shaded text-secondary min-h-screen">
			<legend className="text-center text-4xl py-4">Certifications</legend>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{certifications.map((certification, index) => (
					<CertificationCard key={index} certification={certification} />
				))}
			</div>
		</div>
	);
};

export default Certifications;
