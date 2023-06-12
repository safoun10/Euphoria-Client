import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { RoleContext } from "../../providers/RoleProvider";

const DefaultDash = () => {
	const { isAdmin, isInstructor, isStudent } = useContext(RoleContext);

	return (
		<div>
			<div>
				{isAdmin ? (
					<div>
						<Navigate to={"admin-manage-classes"}></Navigate>
					</div>
				) : isInstructor ? (
					<div>
						<Navigate to={"instructor-add-a-class"}></Navigate>
					</div>
				) : isStudent ? (
					<div>
						<Navigate to={"user-selected-classes"}></Navigate>
					</div>
				) : (
					"Please wait a moment for data to load . You can also try reloading the page . Thank you for your patience ..."
				)}
			</div>
		</div>
	);
};

export default DefaultDash;
