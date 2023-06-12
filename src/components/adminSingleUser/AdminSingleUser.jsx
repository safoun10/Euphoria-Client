import React, { useEffect, useState } from "react";
import "./AdminSingleUser.css";
import Swal from "sweetalert2";

const AdminSingleUser = ({ single, setTest }) => {
	const { _id , email, image, name, role } = single;

	const [disabled_admin, setDisabled_admin] = useState(false);
	const [disabled_instructor, setDisabled_instructor] = useState(false);

	const [newRole, setNewRole] = useState(role);

	const makeAdmin = () => {
		Swal.fire(
			"Updated the role to admin",
			"You may need to wait for a couple of seconds for the server to respond and automatically refresh the role . Thanks for your patience .",
			"success"
		);
		setNewRole("admin");
		setTest(true);
		return;
	};
	const makeInstructor = () => {
		Swal.fire(
			"Updated the role to instructor",
			"You may need to wait for a couple of seconds for the server to respond and automatically refresh the role . Thanks for your patience .",
			"success"
		);
		setNewRole("instructor");
		setTest(true);
		return;
	};

	const db_data = { id: _id, role: newRole };

	fetch("http://localhost:5000/all-users", {
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
		if (role && role === "admin") {
			setDisabled_admin(true);
			setDisabled_instructor(true);
		} else if (role && role === "instructor") {
			setDisabled_instructor(true);
		} else {
			setDisabled_admin(false);
			setDisabled_instructor(false);
		}
	}, [role , db_data.role]);

	return (
		<div>
			<div className="row align-items-center justify-content-between border-class rounded-5">
				<div className="col-4">
					<img
						src={image}
						alt="user image"
						className="rounded-5 img-user img-fluid"
					/>
				</div>
				<div className="col-4">
					<div className="fs-4 fw-light">{name}</div>
					<div>{email}</div>
					<div>Role : {role}</div>
				</div>
				<div className="col-4">
					<button
						onClick={makeAdmin}
						disabled={disabled_admin ? true : false}
						className="btn bg-dark text-white rounded-5 w-100 my-1"
					>
						Make Admin
					</button>
					<button
						onClick={makeInstructor}
						disabled={disabled_instructor ? true : false}
						className="btn bg-dark text-white rounded-5 w-100 my-1"
					>
						Make Instructor
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminSingleUser;
