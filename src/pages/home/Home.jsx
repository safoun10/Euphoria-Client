import React from 'react';
import SwiperBanner from '../../components/swiperBanner/SwiperBanner';
import TopNav from '../../components/topNav/TopNav';
import TopClass from '../../components/topClass/TopClass';
import Features from '../../components/features/Features';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
		<div>
			<div className="bg-char">
				<TopNav></TopNav>
			</div>
			<SwiperBanner></SwiperBanner>
			<div className='bg-brown'>
				<Features></Features>
			</div>
			<TopClass></TopClass>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Home;