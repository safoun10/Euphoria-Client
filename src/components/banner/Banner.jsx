import React from 'react';
import "./Banner.css"
import { Link } from 'react-router-dom';

const Banner = ({img}) => {
    const url = img;
    return (
		<div className='pb-4'>
			<div
				style={{ backgroundImage: `url(${url})` }}
				className="banner text-white d-flex flex-column justify-content-center"
			>
				<div className="display-1 banner-text-head">Euphoria</div>
				<div className='fs-2'>A divine learning place </div>
                <div><Link className='btn text-white bg-dark'>Explore Courses</Link></div>
			</div>
		</div>
	);
};

export default Banner;