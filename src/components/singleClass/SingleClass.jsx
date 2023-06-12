import React, { useContext, useEffect, useState } from "react";
import "./singleClass.css";
import { RoleContext } from "../../providers/RoleProvider";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const SingleClass = ({ classData }) => {
	const {
		_id,
		name,
		image,
		instructor_name,
		instructor_email,
		seats,
		price,
	} = classData;

	const { db_user, isStudent } = useContext(RoleContext);
	const { user } = useContext(AuthContext);

	const [redBg, setRedBg] = useState(false);

	useEffect(() => {
		if (seats == 0) {
			setRedBg(true);
		} else {
			setRedBg(false);
		}
	}, []);

	const userId = db_user?._id;
	const obj = { class_id: _id, user_id: userId };

	const handleClick = async () => {
		const student = await isStudent;
		const loggedIn = await user;

		if (loggedIn && student) {
			fetch("http://localhost:5000/all-users/add-selected-classes", {
				method: "PATCH",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(obj),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data) {
						console.log(data);
						toast("added !!");
					}
				});
		} else {
			toast("You have to be a valid logged in student to select a class");
		}
	};

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
							onClick={handleClick}
							className={`btn btn-dark text-white rounded-0 px-5 py-1 mt-2 ${
								redBg ? "disabled" : ""
							}`}
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
