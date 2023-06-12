import React, { useContext, useEffect, useState } from "react";
import { RoleContext } from "../../providers/RoleProvider";

const UserSelectedClasses = () => {
	const { db_user } = useContext(RoleContext);
	const [all_class, setAll_class] = useState([]);

	const arr = db_user?.selectedClasses;

	useEffect(() => {
		fetch("http://localhost:5000/all-classes")
			.then((res) => res.json())
			.then((data) => {
				setAll_class(data);
			});
	}, [db_user]);

	const filteredData = all_class?.filter((obj) => arr.includes(obj._id));
    console.log(filteredData);


	return (
		<div>
			<div></div>
		</div>
	);
};

export default UserSelectedClasses;
