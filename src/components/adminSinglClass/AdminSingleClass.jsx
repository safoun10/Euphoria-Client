import React, { useEffect, useState } from "react";
import "./AdminSingleClass.css";

const AdminSingleClass = ({ single }) => {
	const [unSelectable, setUnSelectable] = useState(false);

	const {
		image,
		name,
		instructor_email,
		instructor_name,
		seats,
		price,
		status,
	} = single;

	useEffect(() => {
		if (status === "pending") {
			setUnSelectable(false);
			return;
		}
		else if (status === "approved" || "denied") {
			setUnSelectable(true);
			return;
		}
	}, [status]);

	return (
		<div className="row align-items-center border-class rounded-4">
			<div className="col-4">
				<img src={image} className="img-fluid" />
			</div>
			<div className="col-4">
				<div className="fs-4 fw-light">{name}</div>
				<div>Instructor : {instructor_name}</div>
				<div>{instructor_email}</div>
				<div>{price}</div>
				<div>{seats}</div>
			</div>
			<div className="col-2">{status}</div>
			<div className="col-2">
				<button
					disabled={unSelectable ? true : false}
					className="btn bg-dark text-white rounded-3 w-100 my-1"
				>
					Approve
				</button>
				<button
					disabled={unSelectable ? true : false}
					className="btn bg-dark text-white rounded-3 w-100 my-1"
				>
					Deny
				</button>
				<button className="btn bg-dark text-white rounded-3 w-100 my-1">
					Feedback
				</button>
			</div>
		</div>
	);
};

export default AdminSingleClass;
