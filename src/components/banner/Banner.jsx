import React, { useContext } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../providers/ThemeProvider";

const Banner = ({ img, text }) => {
	const { isDarkTheme } = useContext(ThemeContext);
	return (
		<div
			className={`row g-0 align-items-center ${
				isDarkTheme ? "bg-char-2 text-white" : "bg-white text-char"
			}`}
		>
			<div className="col-12 col-md-4 ps-5 responsive-text">
				<div
					className={`display-1 py-2 ${
						isDarkTheme
							? "text-white"
							: "banner-text-head text-char"
					}`}
				>
					Euphoria
				</div>
				<div className="fs-5 pe-2">{text}</div>
				<div>
					<Link
						to={"/classes"}
						className={`btn my-2 rounded-0 px-5 py-2 ${
							isDarkTheme ? "text-char bg-white" : "text-white bg-char"
						}`}
					>
						Explore Classes
					</Link>
				</div>
			</div>
			<div className="col-12 col-md-8 d-flex justify-content-end">
				<img src={img} className="img-fluid" alt="banner" />
			</div>
		</div>
	);
};

export default Banner;
