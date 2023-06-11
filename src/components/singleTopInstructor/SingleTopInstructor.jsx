import React from "react";
import { BsHeart } from "react-icons/bs";

const SingleTopInstructor = ({ single }) => {
	console.log(single);

	const { email, image, name } = single;

	return (
		<div className="col-md-6 col-11 mx-auto p-md-5 p-2">
			<div>
				<img src={image} className="img-fluid rounded-3" alt="img" />
			</div>
			<div className="px-3 pt-1 d-flex align-items-center justify-content-between">
				<div className="fs-3 fw-light">{name}</div>
				<div className=" btn rounded-3"><BsHeart className="fs-4 text-white"></BsHeart></div>
			</div>
		</div>
	);
};

export default SingleTopInstructor;
