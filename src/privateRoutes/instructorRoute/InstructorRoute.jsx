import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { RoleContext } from "../../providers/RoleProvider";

const InstructorRoute = () => {
	const { user , loading } = useContext(AuthContext);
	const { isInstructor } = useContext(RoleContext);

    const location = useLocation();

	if (loading) {
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
	if (user && isInstructor) {
		return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
