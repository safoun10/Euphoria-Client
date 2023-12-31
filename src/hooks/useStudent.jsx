import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useStudent = () => {
	const { user, loading } = useContext(AuthContext);

	const { data: isStudent, isLoading: isStudentLoading } = useQuery({
		queryKey: ["isStudent", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axios.get("/users", {
				baseURL: "https://euphoria-server.vercel.app",
			});
			const students = res.data;
			const matchingStudents = students.find(
				(student) => student.email === user?.email
			);
			return matchingStudents;
		},
	});
	return [isStudent, isStudentLoading];
};

export default useStudent;
