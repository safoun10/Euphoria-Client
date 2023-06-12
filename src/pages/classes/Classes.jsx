import React, { useEffect, useState } from "react";
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import SingleClass from "../../components/singleClass/singleClass";

const Classes = () => {
	const [classes, setClasses] = useState([]);

	const baseURL = "https://euphoria-server.vercel.app/classes";

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setClasses(response.data);
		});
	}, []);

	return (
		<div>
			<div className="bg-char">
				<TopNav></TopNav>
			</div>
			<div className="display-1 my-5 text-center">
				Explore our classes
			</div>
			<div className="mx-auto mb-5" style={{ maxWidth: "1200px" }}>
				{classes.map((classData) => (
					<SingleClass
						classData={classData}
						key={classData._id}
					></SingleClass>
				))}
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Classes;
