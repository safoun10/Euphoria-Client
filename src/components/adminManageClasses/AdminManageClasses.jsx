import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import AdminSingleClass from '../adminSinglClass/AdminSingleClass';

const AdminManageClasses = () => {

    const [all_class, setAll_classes] = useState([]);
	const { user } = useContext(AuthContext);

	useEffect(() =>{
        fetch("http://localhost:5000/all-classes")
			.then((res) => res.json())
			.then((data) => setAll_classes(data));
    } ,[]);

    return (
        <div className='p-4'>
            {all_class.map((single) => (
                <AdminSingleClass key={single._id} single={single}></AdminSingleClass>
            ))}
        </div>
    );
};

export default AdminManageClasses;