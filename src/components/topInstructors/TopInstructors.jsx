import React, { useEffect, useState } from 'react';
import SingleTopInstructor from '../singleTopInstructor/SingleTopInstructor';

const TopInstructors = () => {
    const [topInstructors , setTopInstructors] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/instructors")
        .then(res => res.json())
        .then(data => setTopInstructors(data))
    } , []);

    const slicedData = topInstructors.slice(0 , 6);

    return (
        <div className='py-5 bg-char-2 text-white'>
            <div className='display-2 text-center pb-3 px-3'>Our Top Instructors</div>
            <div style={{maxWidth: "1200px"}} className='row mx-auto'>
                {slicedData.map((single) => (
                    <SingleTopInstructor key={single._id} single={single}></SingleTopInstructor>
                ))}
            </div>
        </div>
    );
};

export default TopInstructors;