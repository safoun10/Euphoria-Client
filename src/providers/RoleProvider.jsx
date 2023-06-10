import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
	const { user } = useContext(AuthContext);

	const [user_from_db, setUsers] = useState([]);

	const [isStudent, setIsStudent] = useState(false);
	const [isInstructor, setIsInstructor] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		fetch("http://localhost:5000/all-users")
			.then((res) => res.json())
			.then((data) => {
				const exact_user = data.filter(
					(single) => single?.email === user?.email
				);
				setUsers(exact_user);
			});
	}, [user]);

	const userRole = user_from_db[0]?.role;

	useEffect(() => {
		if (userRole == "user") {
			setIsStudent(true);
		} else if (userRole == "instructor") {
			setIsInstructor(true);
		} else {
			setIsAdmin(true);
		}
	}, []);

	return (
		<RoleContext.Provider
			value={{ userRole, isAdmin, isInstructor, isStudent }}
		>
			{children}
		</RoleContext.Provider>
	);
};
