import React from "react";
import { BsHeart } from "react-icons/bs";
import { toast } from "react-toastify";
import "./SingleTopInstructor.css"

const SingleTopInstructor = ({ single }) => {
	const { image, name } = single;

	const handleClick = () => {
		const arr = [
			"💕",
			"❤️",
			"💖",
			"❤️‍🔥",
			"💓",
			"💞",
			"💛",
			"💚",
			"💙",
			"💜",
		];
		const randomIndex = Math.floor(Math.random() * arr.length);
		const randomObject = arr[randomIndex];
		toast(randomObject);
	};

	return (
		<div className="col-md-6 col-11 mx-auto p-md-3 p-2">
			<div className="border-card p-5 rounded-3">
				<div>
					<img
						src={image}
						className="img-fluid rounded-3"
						alt="img"
					/>
				</div>
				<div className="px-3 pt-1 d-flex align-items-center justify-content-between">
					<div className="fs-3 fw-light">{name}</div>
					<div onClick={handleClick} className="btn rounded-3">
						<BsHeart className="fs-4 text-white"></BsHeart>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleTopInstructor;
