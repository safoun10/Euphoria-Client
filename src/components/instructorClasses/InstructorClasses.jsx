import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SingleInstructorClass from '../singleInstructorClass/SingleInstructorClass';

const InstructorClasses = () => {
    const [all_class , setAll_classes] =  useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch("http://localhost:5000/all-classes")
        .then(res => res.json())
        .then(data => {
            const filtered_data = data.filter((single) =>
				single?.instructor_email === user.email
			);
            setAll_classes(filtered_data);
        })
    } ,[]);

    return (
		<div>
			<div className='p-5'>
				{all_class.map((classData) => (
					<SingleInstructorClass
						classData={classData}
						key={classData._id}
					></SingleInstructorClass>
				))}
			</div>
		</div>
	);
};

export default InstructorClasses;