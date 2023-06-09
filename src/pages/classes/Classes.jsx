import React, { useEffect, useState } from "react";
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";
import axios from "axios";

const Classes = () => {
	const [classes, setClasses] = useState([]);

	const baseURL = "http://localhost:5000/classes";

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setClasses(response.data);
		});
	}, []);

	console.log(classes);

	return (
		<div>
			<div className="bg-char">
				<TopNav></TopNav>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Classes;
