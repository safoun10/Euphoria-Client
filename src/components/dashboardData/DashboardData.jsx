import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./DashboardData.css";

const DashboardData = () => {
	return (
		<div className="w-100 row">
			<div className="col-4 bg-brown text-white p-5 height-full">
				<div className="display-2 text-center text-cursive pb-5">
					Student Dashboard
				</div>

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
			<div className="col-8">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DashboardData;
