import React, { useEffect, useState } from "react";

const AdminSingleUser = ({ single, setTest }) => {

	const { email, image, name, role } = single;

	return (
		<div>
			<div className="row align-items-center justify-content-between border-class rounded-5">
				<div className="col-4">
					<img
						src={image}
						alt="user image"
						className="rounded-5 img-fluid"
					/>
				</div>
				<div className="col-4">
					<div className="fs-4 fw-light">{name}</div>
					<div>{email}</div>
					<div>Status : {role}</div>
				</div>
				<div className="col-4">
					<button
						className="btn bg-dark text-white rounded-5 w-100 my-1"
					>
						Make Admin
					</button>
					<button
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
