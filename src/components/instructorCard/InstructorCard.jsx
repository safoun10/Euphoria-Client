import React from "react";
import "./InstructorCard.css"

const InstructorCard = ({ data }) => {
	const { name, email, image } = data;

	return (
		<div className="col-6 p-2">
			<div className="d-flex flex-column justify-content-center align-items-center i-card">
				<div>
					<img src={image} className="instructor-img" alt="image" />
				</div>
				<div className="pt-3 px-3">
					<div className="fs-1 fw-light">{name}</div>
					<div className="fs-6">Email : {email}</div>
				</div>
			</div>
		</div>
	);
};

export default InstructorCard;
