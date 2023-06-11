import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import AdminSingleClass from '../adminSinglClass/AdminSingleClass';

const AdminManageClasses = () => {

    const [all_class, setAll_classes] = useState([]);
    const [test, setTest] = useState(false);

	useEffect(() =>{
        fetch("http://localhost:5000/all-classes")
			.then((res) => res.json())
			.then((data) => setAll_classes(data));
    } ,[all_class , test]);

    return (
        <div className='p-4'>
            {all_class.map((single) => (
                <AdminSingleClass key={single._id} single={single} setTest={setTest}></AdminSingleClass>
            ))}
        </div>
    );
};

export default AdminManageClasses;