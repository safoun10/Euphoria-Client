import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { TailSpin } from 'react-loader-spinner';
import useStudent from '../../hooks/useStudent';

const StudentRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
	const [isStudent, isStudentLoading] = useStudent();

	const location = useLocation();

	if (loading || isStudentLoading) {
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
	if (user && isStudent) {
		return children;
	}
	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;