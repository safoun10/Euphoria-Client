import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./TopNav.css";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { BsPersonCircle } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const TopNav = () => {
	const location = useLocation();

	const { user, logout } = useContext(AuthContext);
	const [URL, setURL] = useState("");

	useEffect(() => {
		setURL(user?.photoURL);
	}, [user]);
	
	const signOut = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "Do you really want to log out from euphoria ?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				logout();
				toast("Signed Out !");
			} else {
				toast("Thanks for not leaving us😍💕", {
					autoClose: 500,
					hideProgressBar: true,
					position: "top-center",
				});
			}
		});
	};

	return (
		<div className="mx-auto py-2 text-white" style={{ maxWidth: "1400px" }}>
			<div className="d-flex justify-content-between align-items-center">
				<div className="display-6 unselective">EUPHORIA</div>
				<div className="d-flex gap-4">
					<div>
						<NavLink
							to="/home"
							className={
								location.pathname == "/home"
									? "text-decoration-none text-white fs-5 Links hover-link"
									: "text-decoration-none text-white fs-5 Links"
							}
						>
							Home
						</NavLink>
					</div>
					<div>
						<NavLink
							to="/instructors"
							className={
								location.pathname == "/instructors"
									? "text-decoration-none text-white fs-5 Links hover-link"
									: "text-decoration-none text-white fs-5 Links"
							}
						>
							Instructors
						</NavLink>
					</div>
					<div>
						<NavLink
							to="/classes"
							className={
								location.pathname == "/classes"
									? "text-decoration-none text-white fs-5 Links hover-link"
									: "text-decoration-none text-white fs-5 Links"
							}
						>
							Classes
						</NavLink>
					</div>
					<div>
						<NavLink
							to="/dashboard"
							className={
								location.pathname == "/dashboard"
									? "text-decoration-none text-white fs-5 Links hover-link"
									: "text-decoration-none text-white fs-5 Links"
							}
						>
							Dashboard
						</NavLink>
					</div>
				</div>
				<div>
					{user ? (
						<div className="d-flex justify-content-center align-items-center gap-3">
							<Tooltip id="my-tooltip" style={{ zIndex: 100 }} />
							{user?.photoURL ? (
								<div
									data-tooltip-id="my-tooltip"
									data-tooltip-content={user.displayName}
									data-tooltip-place="top"
								>
									<img
										className="profile-img"
										src={URL}
										alt="profile_photo"
									/>
								</div>
							) : (
								<div>
									<BsPersonCircle
										data-tooltip-id="my-tooltip"
										data-tooltip-content={user.email}
										data-tooltip-place="top"
										className="display-6 text-white"
									></BsPersonCircle>
								</div>
							)}
							<div>
								<Link
									onClick={signOut}
									className="text-decoration-none btn text-white btn btn-outline-secondary rounded-0 px-5 border-3"
								>
									Logout
								</Link>
							</div>
						</div>
					) : (
						<div>
							<Link
								to="/login"
								className="text-decoration-none btn text-white btn btn-outline-secondary rounded-0 px-5 border-3"
							>
								Login
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TopNav;

// {
// 	user ? (
// 		<div className="d-flex justify-content-center align-items-center gap-3">
// 			{user?.photoURL ? (
// 				<div
// 					data-tooltip-id="my-tooltip"
// 					data-tooltip-content={user.displayName}
// 					data-tooltip-place="top"
// 				>
// 					<img
// 						className="profile-img"
// 						src={URL}
// 						alt="profile_photo"
// 					/>
// 				</div>
// 			) : (
// 				<div>
// 					<BsPersonCircle
// 						data-tooltip-id="my-tooltip"
// 						data-tooltip-content={user.email}
// 						data-tooltip-place="top"
// 						className="display-5 text-zero"
// 					></BsPersonCircle>
// 				</div>
// 			)}
// 			<Link className="text-decoration-none text-white">
// 				<div onClick={signOut} className="btn btn-bg-gradient">
// 					Logout
// 				</div>
// 			</Link>
// 		</div>
// 	) : (
// 		<div>
// 			<Link to={"/login"} className="text-decoration-none text-white">
// 				<div className="btn btn-bg-gradient">Login</div>
// 			</Link>
// 		</div>
// 	);
// }
