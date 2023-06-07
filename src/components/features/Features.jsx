import React from 'react';
import { GiMaterialsScience, GiProcessor, GiTeacher, } from "react-icons/gi";
import { BiWinkSmile } from "react-icons/bi"; 

const Features = () => {
    return (
		<div className="mx-auto text-white py-5" style={{ maxWidth: "1200px" }}>
			<div className="text-center display-1 text-cursive pt-3 pb-4">
				Why choose us ?
			</div>
			<div className="row w-100 mx-auto">
				<div className="col-11 col-sm-6 mx-auto col-md-3 d-flex flex-column align-items-center p-3">
					<GiProcessor className="display-1 pb-2"></GiProcessor>
					<div className="fs-3 text-center">
						Comprehensive Course Catalog
					</div>
				</div>
				<div className="col-11 col-sm-6 mx-auto col-md-3 d-flex flex-column align-items-center p-3">
					<GiTeacher className="display-1 pb-2"></GiTeacher>
					<div className="fs-3 text-center">
						Experienced & Expert Instructors
					</div>
				</div>
				<div className="col-11 col-sm-6 mx-auto col-md-3 d-flex flex-column align-items-center p-3">
					<GiMaterialsScience className="display-1 pb-2"></GiMaterialsScience>
					<div className="fs-3 text-center">
						Interactive Learning Resources
					</div>
				</div>
				<div className="col-11 col-sm-6 mx-auto col-md-3 d-flex flex-column align-items-center p-3">
					<BiWinkSmile className="display-1 pb-2"></BiWinkSmile>
					<div className="fs-3 text-center">
						Friendly Environment with shiny Weather
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;