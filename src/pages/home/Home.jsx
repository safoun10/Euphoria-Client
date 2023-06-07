import React from 'react';
import SwiperBanner from '../../components/swiperBanner/Swiperbanner';
import TopNav from '../../components/topNav/TopNav';

const Home = () => {
    return (
		<div>
			<div className='bg-dark-banner'>
				<TopNav></TopNav>
			</div>
			<SwiperBanner></SwiperBanner>
		</div>
	);
};

export default Home;