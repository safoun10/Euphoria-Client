import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const AddAClass = () => {
	const { register, handleSubmit, reset } = useForm();
	const { user } = useContext(AuthContext);

	const onSubmit = (data) => {
		const name = data.class_name;
		const image = data.url;
		const instructor_name = data.instructor_name;
		const instructor_email = data.instructor_email;
		const seats = data.seats;
		const price = data.price;

		const students = "0";
		const status = "pending";

		const db_ready_class = {
			name,
			image,
			instructor_name,
			instructor_email,
			students,
			seats,
			price,
			status,
		};

		fetch("http://localhost:5000/classes", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(db_ready_class),
		})
			.then((res) => res.json())
			.then((data) => {
				// 
			});
		toast("Class Added Successfully !!");
        reset();
	};

	return (
		<div className="my-5 ms-5 me-2">
			<div className="text-center display-2 my-3">Add a class</div>
			<form className="mx-5 pb-5" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<div className="pb-3">
						<div className="fs-4">Class Name</div>
						<div>
							<input
								className="w-100 px-3 py-2"
								type="name"
								name="name"
								id="name"
								placeholder="Enter class name here"
								required
								{...register("class_name")}
							/>
						</div>
					</div>
					<div className="pb-3">
						<div className="fs-4">Class Image URL</div>
						<div>
							<input
								className="w-100 px-3 py-2"
								type="url"
								name="url"
								id="url"
								placeholder="Enter your class image url here"
								required
								{...register("url")}
							/>
						</div>
					</div>
					<div className="pb-3">
						<div className="fs-4">Instructor Name (your name)</div>
						<div>
							<input
								className="w-100 px-3 py-2"
								type="text"
								name="text"
								id="text"
								defaultValue={user?.displayName}
								required
								readOnly
								{...register("instructor_name")}
							/>
						</div>
					</div>
					<div className="pb-3">
						<div className="fs-4">
							Instructor Email (your email)
						</div>
						<div>
							<input
								className="w-100 px-3 py-2"
								type="email"
								name="email"
								id="email"
								defaultValue={user?.email}
								required
								readOnly
								{...register("instructor_email")}
							/>
						</div>
					</div>
					<div>
						<div className="fs-4">Available Seats</div>
						<div>
							<input
								className="w-100 px-3 py-2"
								type="number"
								name="number"
								id="number"
								placeholder="Enter available seats here"
								required
								{...register("seats")}
							/>
						</div>
					</div>
					<div>
						<div className="fs-4">Price</div>
						<div>
							<input
								className="w-100 px-3 py-2"
								type="number"
								name="number"
								id="number"
								placeholder="Enter class price here"
								required
								{...register("price")}
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
							Add this class
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddAClass;
