import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./DashboardData.css";
import { RoleContext } from "../../providers/RoleProvider";

const DashboardData = () => {
	const { isAdmin, isInstructor, isStudent } = useContext(RoleContext);
	return (
		<div className="w-100 row">
			<div className="col-4 bg-brown text-white p-5 height-full">
				<div className="display-2 text-center text-cursive pb-5">
					{isAdmin
						? "Admin "
						: isInstructor
						? "Instructor "
						: isStudent
						? "Student "
						: ""}
					Dashboard
				</div>
				{/************************************************************************************/}
				<div>
					{isAdmin ? (
						<div>
							<Link
								to="/dashboard/admin-manage-classes"
								className="text-decoration-none text-dark"
							>
								<div className="btn bg-white rounded-0 w-100 py-2 mb-5">
									Manage Classes
								</div>
							</Link>

							<Link
								to="/dashboard/admin-manage-users"
								className="text-decoration-none text-dark"
							>
								<div className="btn bg-white rounded-0 w-100 py-2 mb-5">
									Manage User
								</div>
							</Link>
						</div>
					) : isInstructor ? (
						<div>
							<Link
								to="/dashboard/instructor-add-a-class"
								className="text-decoration-none text-dark"
							>
								<div className="btn bg-white rounded-0 w-100 py-2 mb-5">
									Add A Class
								</div>
							</Link>

							<Link
								to="/dashboard/instructor-classes"
								className="text-decoration-none text-dark"
							>
								<div className="btn bg-white rounded-0 w-100 py-2 mb-5">
									My Classes
								</div>
							</Link>

							<Link
								to="/dashboard/instructor-feedbacks"
								className="text-decoration-none text-dark"
							>
								<div className="btn bg-white rounded-0 w-100 py-2">
									Feedback from Admin
								</div>
							</Link>
						</div>
					) : isStudent ? (
						<div>
							<Link
								to="/dashboard/user-selected-classes"
								className="text-decoration-none text-dark"
							>
								<div className="btn bg-white rounded-0 w-100 py-2 mb-5">
									My Selected Classes
								</div>
							</Link>

							<Link
								to="/dashboard/user-enrolled-classes"
								className="text-decoration-none text-dark"
							>
								<div className="btn bg-white rounded-0 w-100 py-2">
									My Enrolled Classes
								</div>
							</Link>
						</div>
					) : (
						"Please wait for a moment till data loads . Sorry for the inconvenience .."
					)}
				</div>
				{/************************************************************************************/}
			</div>
			<div className="col-8">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DashboardData;
