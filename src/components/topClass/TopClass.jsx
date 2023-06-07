import React, { useEffect, useState } from 'react';
import "./TopClass.css"

const TopClass = () => {
	const [top, setTop] = useState([]);

	useEffect(() => {
		fetch("popular.json")
		.then(res => res.json())
		.then(data => setTop(data))
	} ,[]);

	const first = top.slice(0 , 3);
	const last = top.slice(3 , 6);

    return (
		<div className="mx-auto mb-5" style={{ maxWidth: "1200px" }}>
			<div className="text-center display-1 mt-5 pb-1 text-cursive">
				Visit our top <span className="text-brown">Photography</span>{" "}
				classes
			</div>
			<div className="text-center w-75 mx-auto pb-5">
				Unlock your creative potential and capture stunning images with
				our premier photography classes. From portrait to landscape,
				wildlife to automobile, explore the art of photography with our
				expert instructors. Enroll now and embark on a transformative
				photographic journey.
			</div>
			<div className="row">
				<div className="col-sm-6 col-11 mx-auto">
					{first.map((single) => (
						<div key={single.id} className='top-card'>
							<img
								src={single.photo}
								alt="photo"
								className="img-fluid rounded-2"
							/>
							<div className='d-flex align-items-center justify-content-between px-2'>
								<div className="text-cursive display-5 pt-2">
									{single.name}
								</div>
								<div className="text-cursive display-6">
									{single.student} students
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="col-sm-6 col-11 mx-auto">
					{last.map((single) => (
						<div key={single.id} className='top-card'>
							<img
								src={single.photo}
								alt="photo"
								className="img-fluid rounded-2"
							/>
							<div className='d-flex align-items-center justify-content-between px-2'>
								<div className="text-cursive display-5 pt-2">
									{single.name}
								</div>
								<div className="text-cursive display-6">
									{single.student} students
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