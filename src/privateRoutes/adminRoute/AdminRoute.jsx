import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [isAdmin, isAdminLoading] = useAdmin();

	const location = useLocation();

	if (loading || isAdminLoading) {
		return (
			<div
				style={{
					display: "flex",
					minHeight: "100vh",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<TailSpin
					height="200"
					width="200"
					color="#A084DC"
					ariaLabel="watch-loading"
					wrapperStyle={{}}
					visible={true}
				/>
			</div>
		);
	}
	if (user && isAdmin) {
		return children;
	}
	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
