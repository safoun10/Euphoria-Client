import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth();
const Register = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const { createUser, GoogleProvider, updateUserProfile } =
		useContext(AuthContext);

	const onSubmit = (data) => {
		const name = data.name;
		const email = data.email;
		const password = data.password;
		const confirm = data.confirmPassword;
		const url = data.url;
		if (data.password.length < 6) {
			toast.warning("Password should be at least 6 characters long.");
			return;
		}
		if (!/[A-Z]/.test(data.password)) {
			toast.warning(
				"Password should contain at least one capital letter."
			);
			return;
		}
		if (!/[^a-zA-Z0-9]/.test(data.password)) {
			toast.warning(
				"Password should contain at least one special character."
			);
			return;
		} else if (password !== confirm) {
			toast.error(
				"Your confirming password is wrong . Please try again."
			);
			return;
		} else {
			createUser(email, password)
				.then(() => {
					const savedUser = {
						name: name,
						email: email,
						image: url,
						role: "user",
					};

					console.log(savedUser);
					updateUserProfile(name, url)
						.then(() => {
							fetch("http://localhost:5000/users", {
								method: "POST",
								headers: {
									"content-type": "application/json",
								},
								body: JSON.stringify(savedUser),
							})
								.then((res) => res.json())
								.then((data) => {
									if (data.insertedID) {
										toast("Account created successfully");
										navigate("/home");
									}
								});
						})
						.catch((err) => {
							toast.error(err.message);
						});
				})
				.catch((error) => {
					toast.error(error.message);
				});
			return;
		}
	};

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, GoogleProvider)
			.then(() => {
				toast("You have successfully registered with Google !!");
				navigate("/home");
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	return (
		<div>
			<div className="bg-photo">
				<div className="col-md-7 col-11 mx-auto">
					<div className="col-12 mx-auto py-5">
						<div className="display-6 text-center pb-2">
							Register your account
						</div>
						<hr />
						<div className="row align-items-center">
							<form
								className="mt-5 col-8"
								onSubmit={handleSubmit(onSubmit)}
							>
								<div>
									<div className="pb-3">
										<div className="fs-4">Name</div>
										<div>
											<input
												className="w-100 px-3 py-2"
												type="name"
												name="name"
												id="name"
												placeholder="Please enter your name here"
												required
												{...register("name")}
											/>
										</div>
									</div>
									<div className="pb-3">
										<div className="fs-4">
											Email address
										</div>
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
									<div className="pb-3">
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
									<div className="pb-3">
										<div className="fs-4">
											Confirm Password
										</div>
										<div>
											<input
												className="w-100 px-3 py-2"
												type="password"
												name="confirmPassword"
												id="confirmPassword"
												placeholder="Please type you password again to confirm"
												required
												{...register("confirmPassword")}
											/>
										</div>
									</div>
									<div>
										<div className="fs-4">Photo URL</div>
										<div>
											<input
												className="w-100 px-3 py-2"
												type="url"
												name="url"
												id="url"
												placeholder="Please paste you photo URL here"
												required
												{...register("url")}
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
											Register
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
												Register with Google
											</div>
										</div>
									</div>

									<div className="text-center mt-4 fs-5">
										Already have an account ?
										<Link
											className="text-decoration-none text-danger"
											to={"/login"}
										>
											<span> Login</span>
										</Link>
									</div>
								</div>
							</form>
							<div className="col-4">
								<img
									className="img-fluid"
									src="https://i.postimg.cc/PqgHZqNc/istockphoto-1031071002-612x612-removebg-preview.png"
									alt="photo"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
