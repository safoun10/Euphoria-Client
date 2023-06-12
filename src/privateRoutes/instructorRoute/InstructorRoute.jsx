import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useInstructor from "../../hooks/useInstructor";
import { useContext } from "react";
import { TailSpin } from "react-loader-spinner";

const InstructorRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [isInstructor, isInstructorLoading] = useInstructor();

	const location = useLocation();

	if (loading || isInstructorLoading) {
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
