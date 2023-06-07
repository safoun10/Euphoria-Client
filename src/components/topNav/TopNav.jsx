import React from 'react';
import { Link } from 'react-router-dom';
import "./TopNav.css"

const TopNav = () => {
    return (
		<div className="mx-auto py-2 text-white" style={{ maxWidth: "1400px" }}>
			<div className="d-flex justify-content-between align-items-center">
				<div className="display-6">EUPHORIA</div>
				<div className="d-flex gap-4">
					<div>
						<Link className="text-decoration-none text-white fs-5 hover-link">Home</Link>
					</div>
					<div>
						<Link className="text-decoration-none text-white fs-5 hover-link">Instructors</Link>
					</div>
					<div>
						<Link className="text-decoration-none text-white fs-5 hover-link">Classes</Link>
					</div>
					<div>
						<Link className="text-decoration-none text-white fs-5 hover-link">Dashboard</Link>
					</div>
				</div>
				<div>
					<Link
						className="text-decoration-none btn text-white btn btn-outline-secondary rounded-0 px-5 border-3"
					>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopNav;