import React, { useContext, useEffect } from "react";
import { RoleContext } from "../../providers/RoleProvider";

const UserSelectedClasses = () => {
	const { db_user } = useContext(RoleContext);

	// email,
	// enrolledClasses,
	// image,
	// name,
	// role,
	// selectedClasses,
	// _id

	// console.log(db_user);
	// console.log(db_user?.selectedClasses);

	useEffect(() => {
		fetch("http://localhost:5000/all-classes")
			.then((res) => res.json())
			.then((data) => {
				const filteredData = data?.filter((single) =>
					db_user?.selectedClasses.includes(single?._id)
				);
				console.log(filteredData);
			})
	}, []);

	return (
		<div>
			<div></div>
		</div>
	);
};

export default UserSelectedClasses;
