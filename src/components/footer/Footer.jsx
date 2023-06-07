import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
		<div className="">
			<div className="bg-dark py-3 w-100">
				<div className="display-3 text-center text-white pb-2">
					Euphoria
				</div>
				<div className="text-center w-75 mx-auto text-white">
					Unlock the secret to capturing euphoria with your camera
					this summer, and let your photographs tell stories of pure
					bliss.
				</div>
			</div>
			<div className="row text-white w-100 p-0 m-0">
				<div className="col-6 p-5 bg-char">
					<div className="ms-auto" style={{ maxWidth: "600px" }}>
						<div className="d-flex justify-content-around">
							<div>
								<div className="display-6 pb-4">Navigation</div>
								<div>
									<div>
										<Link
											to="/"
											className="text-decoration-none text-white"
										>
											Home
										</Link>
									</div>
									<div>
										<Link
											to="/instructors"
											className="text-decoration-none text-white"
										>
											Instructors
										</Link>
									</div>
									<div>
										<Link
											to="/classes"
											className="text-decoration-none text-white"
										>
											Classes
										</Link>
									</div>
									<div>
										<Link
											to="/dashboard"
											className="text-decoration-none text-white"
										>
											Dashboard
										</Link>
									</div>
								</div>
							</div>
							<div>
								<div className="display-6 pb-4">
									Social Links
								</div>
								<div>
									<div>
										<Link
											to="https://github.com/safoun10"
											target="_blank"
											className="text-decoration-none text-white"
										>
											Github
										</Link>
									</div>
									<div>
										<Link
											to="https://www.facebook.com/safoun.10"
											target="_blank"
											className="text-decoration-none text-white"
										>
											Facebook
										</Link>
									</div>
									<div>
										<Link
											to="https://www.linkedin.com/in/safoun10/"
											target="_blank"
											className="text-decoration-none text-white"
										>
											LinkedIn
										</Link>
									</div>
									<div>
										<Link
											to="https://toytopia-safoun.web.app/home"
											target="_blank"
											className="text-decoration-none text-white"
										>
											Toytopia
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 p-5 bg-char-2">
					<div className="me-auto " style={{ maxWidth: "600px" }}>
						<div className="d-flex justify-content-around">
							<div>
								<div className="display-6 pb-4">
									Contact Info
								</div>
								<div>
									<div>
										<Link className="text-decoration-none text-white">
											support@euphoria.com
										</Link>
									</div>
									<div>
										<Link className="text-decoration-none text-white">
											+00 142 536 456
										</Link>
									</div>
									<div>
										<Link className="text-decoration-none text-white">
											euphoria.web.app/support
										</Link>
									</div>
								</div>
							</div>
							<div>
								<div className="display-6 pb-4">Address</div>
								<div>
									<div>
										<Link className="text-decoration-none text-white">
											2552 pasher goli , noya bazar,
										</Link>
									</div>
									<div>
										<Link
											className="text-decoration-none text-white"
										>
                                            South Pole , Mars,
                                        </Link>
									</div>
									<div>
										<Link className="text-decoration-none text-white">
											Proxima Centauri , Milky Way
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div className='bg-dark py-2'>
                <div className='text-center text-white'> Copyright &copy; Euphoria | All rights reserved</div>
            </div>
		</div>
	);
};

export default Footer;