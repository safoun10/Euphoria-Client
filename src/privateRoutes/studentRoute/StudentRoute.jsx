import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { RoleContext } from '../../providers/RoleProvider';
import { TailSpin } from 'react-loader-spinner';

const StudentRoute = () => {
    const { user, loading } = useContext(AuthContext);
	const { isAdmin } = useContext(RoleContext);

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
	if (user && isAdmin) {
		return children;
	}
	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;