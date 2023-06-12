import React, { useEffect, useState } from "react";
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";
import InstructorCard from "../../components/instructorCard/InstructorCard";

const Instructors = () => {
	const [instructors, setInstructors] = useState([]);

	useEffect(() => {
		fetch("https://euphoria-server.vercel.app/instructors")
			.then((res) => res.json())
			.then((data) => setInstructors(data));
	}, []);

	return (
		<div>
			<div className="bg-char">
				<TopNav></TopNav>
			</div>
			<div className="mx-auto" style={{ maxWidth: "1200px" }}>
				<div>
					<div className="display-4 text-center my-5 text-char">
						Our Honorable hard working instructors
					</div>
				</div>
				<div className="row mb-5">
					{instructors.map((data) => (
						<InstructorCard
							data={data}
							key={data._id}
						></InstructorCard>
					))}
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Instructors;
