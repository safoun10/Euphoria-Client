import React, { useEffect, useState } from "react";
import "./AdminSingleUser.css"

const AdminSingleUser = ({ single, setTest }) => {

	const { email, image, name, role } = single;

	const [disabled_admin , setDisabled_admin] = useState(false);
	const [disabled_instructor , setDisabled_instructor] = useState(false);

	useEffect(() => {
		if(role && role === "admin"){
			setDisabled_admin(true);
			setDisabled_instructor(true);
		} else if (role && role === "instructor"){
			setDisabled_instructor(true);
		} else{
			setDisabled_admin(false);
			setDisabled_instructor(false);
		}
	} , []);

	console.log(disabled_admin , disabled_instructor);

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
					<div>Status : {role}</div>
				</div>
				<div className="col-4">
					<button
					disabled={disabled_admin ? true : false}
						className="btn bg-dark text-white rounded-5 w-100 my-1"
					>
						Make Admin
					</button>
					<button
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
