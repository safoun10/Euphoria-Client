import React, { useEffect, useState } from "react";
import "./singleClass.css";

const SingleClass = ({ classData }) => {
	const { name, image, instructor_name, instructor_email, seats, price } =
		classData;

	const [redBg, setRedBg] = useState(false);

	useEffect(() => {
		if (seats == 0) {
			setRedBg(true);
		} else {
			setRedBg(false);
		}
	}, []);

	return (
		<div className="p-3">
			<div
				className={`row align-items-center card-class ${
					redBg ? "bg-red border-red" : ""
				}`}
			>
				<div className="col-8">
					<img
						className="img-fluid img-class"
						src={image}
						alt="class"
					/>
					<div className="display-5 pt-2">{name}</div>
				</div>
				<div className="col-4">
					<div>
						<span className="fw-bold">Instructor Name : </span>{" "}
						{instructor_name}
					</div>
					<div>
						<span className="fw-bold">Instructor Email : </span>{" "}
						{instructor_email}
					</div>
					<div>
						<span className="fw-bold">Available Seats : </span>{" "}
						{seats}
					</div>
					<div>
						<span className="fw-bold">Price : $</span>
						{price}
					</div>
					<div>
						<div
							className={`btn btn-dark text-white rounded-0 px-5 py-1 mt-2 ${redBg ? "disabled":""}`}
						>
							Enroll
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleClass;
