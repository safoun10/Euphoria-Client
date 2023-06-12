import React, { useEffect, useState } from 'react';
import AdminSingleUser from '../adminSingleUser/AdminSingleUser';

const AdminManageUsers = () => {
    const [all_users, setAll_users] = useState([]);
    const [test, setTest] = useState(false);


    useEffect(() => {
		fetch("http://localhost:5000/all-users")
			.then((res) => res.json())
			.then((data) => setAll_users(data));
	}, [ all_users , test]);

    return (
		<div className="p-4">
			{all_users.map((single) => (
				<AdminSingleUser
					key={single._id}
					single={single}
					setTest={setTest}
				></AdminSingleUser>
			))}
		</div>
	);
};

export default AdminManageUsers;