import React, { useEffect, useState } from "react";
import "./TopClass.css";
import axios from "axios";

const TopClass = () => {
	const [top, setTop] = useState([]);

	const baseURL = "http://localhost:5000/top-classes";

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setTop(response.data);
		});
	}, []);

	const first = top.slice(0, 3);
	const last = top.slice(3, 6);

	// slicing was unnecessary here =_=

	return (
		<div className="mx-auto pb-5 w-100" style={{ maxWidth: "1200px" }}>
			<div className="text-center display-1 pt-5 pb-1 text-cursive">
				Visit our top Photography
				classes
			</div>
			<div className="text-center w-75 mx-auto pb-5">
				Unlock your creative potential and capture stunning images with
				our premier photography classes. From portrait to landscape,
				wildlife to automobile, explore the art of photography with our
				expert instructors. Enroll now and embark on a transformative
				photographic journey.
			</div>
			<div className="row w-100 mx-auto">
				<div className="col-sm-6 col-11 mx-auto">
					{first.map((single) => (
						<div key={single._id} className="top-card">
							<img
								src={single.image}
								alt="photo"
								className="img-fluid rounded-2"
							/>
							<div className="d-flex align-items-center justify-content-between px-2">
								<div className="text-cursive display-5 pt-2">
									{single.name}
								</div>
								<div className="text-cursive display-6">
									{single.students} students
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="col-sm-6 col-11 mx-auto">
					{last.map((single) => (
						<div key={single._id} className="top-card">
							<img
								src={single.image}
								alt="photo"
								className="img-fluid rounded-2"
							/>
							<div className="d-flex align-items-center justify-content-between px-2">
								<div className="text-cursive display-5 pt-2">
									{single.name}
								</div>
								<div className="text-cursive display-6">
									{single.students} students
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TopClass;
