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

	const all_students = all_class.map(single => single.students);
	const sum = all_students.reduce((total, num) => total + Number(num), 0);

    return (
		<div>
			<div className="p-5">
				<div className='fs-4 pb-3 ps-3'>Total enrolled students : {sum}</div>
				<div>
					{all_class.map((classData) => (
						<SingleInstructorClass
							classData={classData}
							key={classData._id}
						></SingleInstructorClass>
					))}
				</div>
			</div>
		</div>
	);
};

export default InstructorClasses;