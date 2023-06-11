import React, { useContext } from "react";
import SwiperBanner from "../../components/swiperBanner/SwiperBanner";
import TopNav from "../../components/topNav/TopNav";
import TopClass from "../../components/topClass/TopClass";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../providers/ThemeProvider";
import TopInstructors from "../../components/topInstructors/TopInstructors";

const Home = () => {
	const { isDarkTheme } = useContext(ThemeContext);
	return (
		<div>
			<div className="bg-char">
				<TopNav></TopNav>
			</div>
			<SwiperBanner></SwiperBanner>
			<div className={isDarkTheme ? "bg-char" : "bg-brown"}>
				<Features></Features>
			</div>
			<div
				className={
					isDarkTheme ? "bg-brown text-white" : "bg-white text-char"
				}
			>
				<TopClass></TopClass>
			</div>
			<div
				className={
					isDarkTheme ? "bg-dark" : ""
				}
			>
				<TopInstructors></TopInstructors>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Home;
