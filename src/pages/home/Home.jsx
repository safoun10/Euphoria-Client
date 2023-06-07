import React from 'react';
import SwiperBanner from '../../components/swiperBanner/SwiperBanner';
import TopNav from '../../components/topNav/TopNav';
import TopClass from '../../components/topClass/TopClass';

const Home = () => {
    return (
		<div>
			<div className='bg-char'>
				<TopNav></TopNav>
			</div>
			<SwiperBanner></SwiperBanner>
			<TopClass></TopClass>
		</div>
	);
};

export default Home;