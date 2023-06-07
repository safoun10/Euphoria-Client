import React from 'react';
import "./Banner.css"
import { Link } from 'react-router-dom';

const Banner = ({img , text}) => {
    return (
		<div className='row align-items-center'>
			<div className='col-12 col-md-4 ps-5'>
				<div className="display-1 banner-text-head py-2">Euphoria</div>
				<div className='fs-5'>{text}</div>
                <div><Link className='btn text-white bg-dark my-2 rounded-0 px-5 py-2'>Explore Courses</Link></div>
			</div>
			<div className='col-12 col-md-8'>
				<img src={img} className='img-fluid' alt="" />
			</div>
		</div>
	);
};

export default Banner;