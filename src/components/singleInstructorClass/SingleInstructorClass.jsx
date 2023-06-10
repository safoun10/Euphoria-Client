import React, { useEffect, useState } from 'react';
import "./SingleInstructorClass.css"

const SingleInstructorClass = ({classData}) => {

    const { name, image, status } =
		classData;

    return (
		<div>
			<div className="p-3">
				<div
					className= "row align-items-center i-card-class"
				>
					<div>
						<img
							className="img-fluid i-img-class"
							src={image}
							alt="class"
						/>
						<div className="fs-3 pt-2">{name}</div>
					</div>
					<div>
						<div>
                            <div>status : {status}</div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleInstructorClass;