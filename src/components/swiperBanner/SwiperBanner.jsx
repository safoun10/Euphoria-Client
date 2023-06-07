import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import Banner from "../../components/banner/Banner";

const SwiperBanner = () => {
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
					<Banner
						img="https://i.postimg.cc/VLdwrBJ6/erik-mclean-9-XK7vgo-GSgc-unsplash.jpg"
						text="Make this summer unforgettable with our photography summer school!  Learn, explore, and savor the thrill of photography while making the most of your precious summer days."
					></Banner>
				</SwiperSlide>
				<SwiperSlide>
					<Banner
						img="https://i.postimg.cc/G3Tc2n9N/reinhart-julian-Wx-M465o-M4j4-unsplash.jpg"
						text="Unleash the magic of summer as you dive into the enchanting realm of photography, discovering its secrets while indulging in the sheer delight it brings."
					></Banner>
				</SwiperSlide>
				<SwiperSlide>
					<Banner
						img="https://i.postimg.cc/9Xv29wZY/jeff-hopper-i-Ct-JF-A5hvs-unsplash.jpg"
						text="Capture the summer's magic at our photography summer school. Learn, create, and make lifelong memories. Join us now!"
					></Banner>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SwiperBanner;
