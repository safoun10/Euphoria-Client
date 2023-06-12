import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
	const { user, loading } = useContext(AuthContext);

	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ["isAdmin", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axios.get("/admins", {
				baseURL: "http://localhost:5000",
			});
			const admins = res.data;
			const matchingAdmin = admins.find(
				(admin) => admin.email === user?.email
			);
			console.log(admins);
			console.log(matchingAdmin);
			return matchingAdmin;
		},
	});
	console.log(isAdmin);
	return [isAdmin, isAdminLoading];
};

export default useAdmin;
