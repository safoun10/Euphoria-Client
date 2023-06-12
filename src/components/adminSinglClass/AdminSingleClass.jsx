import React, { useEffect, useState } from "react";
import "./AdminSingleClass.css";
import Swal from "sweetalert2";

const AdminSingleClass = ({ single, setTest }) => {
	const [unSelectable, setUnSelectable] = useState(false);

	const {
		image,
		name,
		instructor_email,
		instructor_name,
		seats,
		price,
		status,
		_id,
	} = single;

	const [newStatus, setNewStats] = useState(status);

	const onApprove = () => {
		Swal.fire(
			"Thanks for Approving !",
			"You may need to wait for a couple of seconds for the server to respond and automatically refresh the role . Thanks for your patience .",
			"success"
		);
		setNewStats("approved");
		setTest(true);
		return;
	};
	const onDeny = () => {
		Swal.fire(
			"Class add request denied !",
			"You may need to wait for a couple of seconds for the server to respond and automatically refresh the role . Thanks for your patience .",
			"success"
		);
		setNewStats("denied");
		setTest(true);
		return;
	};

	const db_data = { id: _id, status: newStatus };

	fetch("http://localhost:5000/all-classes", {
		method: "PATCH",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(db_data),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.insertedID) {
				// console.log(data);
			}
		});

	useEffect(() => {
		if (status === "pending") {
			setUnSelectable(false);
			return;
		} else if (status === "approved" || "denied") {
			setUnSelectable(true);
			return;
		}
	}, [status, db_data.status]);

	return (
		<div className="row align-items-center border-class rounded-4">
			<div className="col-4">
				<img src={image} alt="class image" className="img-fluid" />
			</div>
			<div className="col-4">
				<div className="fs-4 fw-light">{name}</div>
				<div>Instructor : {instructor_name}</div>
				<div>{instructor_email}</div>
				<div>Price :  {price}</div>
				<div>Available Seats : {seats}</div>
			</div>
			<div className="col-2">{status}</div>
			<div className="col-2">
				<button
					onClick={onApprove}
					disabled={unSelectable ? true : false}
					className="btn bg-dark text-white rounded-3 w-100 my-1"
				>
					Approve
				</button>
				<button
					onClick={onDeny}
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
