import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
	const { user } = useContext(AuthContext);

	const [user_from_db, setUsers] = useState([]);

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

	return <RoleContext.Provider value={{userRole}}>{children}</RoleContext.Provider>;
};

// single?.email === user?.email
