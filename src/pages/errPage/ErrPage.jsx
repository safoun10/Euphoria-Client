import React from "react";
import { Link } from "react-router-dom";

const ErrPage = () => {
	return (
		<div>
			<div className="d-flex my-5 flex-column justify-content-center align-items-center">
				<img
					style={{ width: "50vw" }}
					src="https://i.postimg.cc/DZTzP6Cr/Joshim-oops-blank.png"
					alt="404"
				/>
				<div className="fs-5 text-center text-char py-2">
					oops !! ভুল করে ভুল পেজ এ চলে আসলাম ! 🙂
				</div>
				<div className="text-brown">(Status code : 404 | page not found)</div>
				<div>
					<Link
						to="/"
						className="btn bg-char text-white rounded-0 px-5 py-2 my-3 text-decoration-none"
					>
						{"<-"} Go Back to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrPage;
