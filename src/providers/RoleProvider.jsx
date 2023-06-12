import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
	const { user } = useContext(AuthContext);

	const [user_from_db, setUsers] = useState([]);

	const [isStudent, setIsStudent] = useState(false);
	const [isInstructor, setIsInstructor] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch("https://euphoria-server.vercel.app/all-users")
			.then((res) => res.json())
			.then((data) => {
				const exact_user = data.filter(
					(single) => single?.email === user?.email
				);
				setUsers(exact_user);
				setLoading(false);
			});
	}, [user, loading]);

	const db_user = user_from_db[0];
	const userRole = user_from_db[0]?.role;

	useEffect(() => {
		if (userRole == "user") {
			setIsStudent(true);
		} else if (userRole == "instructor") {
			setIsInstructor(true);
		} else if (userRole == "admin") {
			setIsAdmin(true);
		}
	}, [userRole]);

	return (
		<RoleContext.Provider
			value={{
				setLoading,
				db_user,
				userRole,
				isAdmin,
				isInstructor,
				isStudent,
			}}
		>
			{children}
		</RoleContext.Provider>
	);
};
