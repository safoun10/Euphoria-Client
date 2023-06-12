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

	const { setLoading, db_user, isStudent } = useContext(RoleContext);
	const { user } = useContext(AuthContext);
	const [new_user_data, setNew_user_data] = useState([]);
	const [disabled, setDisabled] = useState(false);
	const [redBg, setRedBg] = useState(false);

	useEffect(() => {
		if (seats == 0) {
			setRedBg(true);
		} else {
			setRedBg(false);
		}
	}, [new_user_data, disabled]);

	const userId = db_user?._id;
	const obj = { class_id: _id, user_id: userId };

	const handleClick = async () => {
		const student = await isStudent;
		const loggedIn = await user;

		if (loggedIn && student) {
			fetch(
				"https://euphoria-server.vercel.app/all-users/add-selected-classes",
				{
					method: "PATCH",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(obj),
				}
			)
				.then((res) => res.json())
				.then((data) => {
					if (data) {
						toast("class added !! check out the dashboard .");
						setLoading(true);
					}
				});
		} else {
			toast.warning(
				"You have to be a valid logged in student to select a class"
			);
		}
	};

	useEffect(() => {
		const data = db_user?.selectedClasses?.map((item) => item.class_id);
		setNew_user_data(data);
	}, [db_user]);

	useEffect(() => {
		if (new_user_data?.includes(_id)) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [new_user_data, _id]);

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
						<button
							onClick={handleClick}
							disabled={disabled ? true : false}
							className={`btn btn-dark text-white rounded-0 px-5 py-1 mt-2 ${
								redBg ? "disabled" : ""
							}`}
						>
							Enroll
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleClass;
