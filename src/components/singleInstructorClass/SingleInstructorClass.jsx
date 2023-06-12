import React, { useEffect, useState } from "react";
import "./SingleInstructorClass.css";

const SingleInstructorClass = ({ classData }) => {
	const { name, image, status , students } = classData;

	return (
		<div>
			<div className="p-3">
				<div className="row align-items-center i-card-class">
					<div>
						<img
							className="img-fluid i-img-class"
							src={image}
							alt="class"
						/>
						<div className="fs-3 pt-2">{name}</div>
					</div>
					<div className="d-flex align-items-center justify-content-between">
						<div>
							<div>
								<div>status : {status}</div>
							</div>
							<div>
								<div>Enrolled Students : {students}</div>
							</div>
						</div>
						<div className="btn bg-dark rounded-0 text-white px-5">
							Update This Class
						</div>
					</div>
					<div className="py-2">
						<hr/>
					</div>
					<div>
						No Feedback from Admin
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleInstructorClass;
