import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import Banner from '../../components/banner/Banner';

const Home = () => {
    return (
		<div>
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Autoplay, Pagination]}
			>
				<SwiperSlide>
					<Banner img="https://images.unsplash.com/photo-1554080353-321e452ccf19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Banner>
				</SwiperSlide>
				<SwiperSlide>
					<Banner img="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format"></Banner>
				</SwiperSlide>
				<SwiperSlide>
					<Banner img="https://images.unsplash.com/photo-1431068799455-80bae0caf685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format"></Banner>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Home;