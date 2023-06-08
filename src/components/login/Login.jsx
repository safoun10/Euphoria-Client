import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";

const auth = getAuth();

const Login = () => {
	const { loginUser, GoogleProvider } = useContext(AuthContext);
	const { register, handleSubmit } = useForm();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/home";

	const onSubmit = (data) => {
		const email = data.email;
		const password = data.password;

		loginUser(email, password)
			.then((res) => {
				toast("Welcome Back !!");
				form.reset();
				navigate(from, { replace: true });
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, GoogleProvider)
			.then(() => {
				toast("You have successfully signed in with Google !!");
				navigate(from, { replace: true });
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	return (
		<div className="bg-photo">
			<div className="col-md-7 col-11 mx-auto">
				<div className="col-12 mx-auto py-5">
					<div className="display-6 text-center pb-2">
						Login your account
					</div>
					<hr />
					<div className="row align-items-center">
						<form
							className="mt-5 col-8"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div>
								<div className="pb-3">
									<div className="fs-4">Email address</div>
									<div>
										<input
											className="w-100 px-3 py-2"
											type="email"
											name="email"
											id="email"
											placeholder="Please enter your email address here"
											required
											{...register("email")}
										/>
									</div>
								</div>
								<div>
									<div className="fs-4">Password</div>
									<div>
										<input
											className="w-100 px-3 py-2"
											type="password"
											name="password"
											id="password"
											placeholder="Please enter your password here"
											required
											{...register("password")}
										/>
									</div>
								</div>
							</div>

							<div>
								<div>
									<button
										className="w-100 bg-dark border-0 text-white py-2 fs-5 mt-3"
										type="submit"
									>
										Login
									</button>
								</div>
								<div className="d-flex gap-2 justify-content-center pt-3">
									<div>----------</div>
									<div>or</div>
									<div>----------</div>
								</div>
								<div>
									<div>
										<div
											onClick={handleGoogleSignIn}
											type="button"
											className="btn rounded-0 text-white bg-dark w-100 py-2 fs-5 mt-3"
										>
											Login with Google
										</div>
									</div>
								</div>
								<div className="text-center mt-4 fs-5">
									Don't Have An Account ?
									<Link
										className="text-decoration-none text-danger"
										to={"/register"}
									>
										<span> Register</span>
									</Link>
								</div>
							</div>
						</form>
						<div className="col-4">
							<img
								className="img-fluid"
								src="https://i.postimg.cc/ZqVDDz2c/istockphoto-1194214419-612x612-removebg-preview.png"
								alt="photo"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
