import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
	const location = useLocation();
	console.log(location.pathname);
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
					<Link
						to="/login"
						className="text-decoration-none btn text-white btn btn-outline-secondary rounded-0 px-5 border-3"
					>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
