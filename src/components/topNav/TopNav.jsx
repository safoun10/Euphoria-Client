import React from 'react';
import { Link } from 'react-router-dom';
import "./TopNav.css"

const TopNav = () => {
    return (
		<div className="mx-auto py-2 text-white" style={{ maxWidth: "1400px" }}>
			<div className="d-flex justify-content-between align-items-center">
				<div className="display-6">EUPHORIA</div>
				<div className="d-flex gap-3">
					<div>
						<Link className="text-decoration-none text-white">link</Link>
					</div>
					<div>
						<Link className="text-decoration-none text-white">link</Link>
					</div>
					<div>
						<Link className="text-decoration-none text-white">link</Link>
					</div>
				</div>
				<div>
					<Link
						className="text-decoration-none btn text-white"
					>
						login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TopNav;