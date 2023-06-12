import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useInstructor = () => {
	const { user, loading } = useContext(AuthContext);

	const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
		queryKey: ["isInstructor", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axios.get("/instructors", {
				baseURL: "http://localhost:5000",
			});
			const instructors = res.data;
			const matchingInstructor = instructors.find(
				(instructor) => instructor.email === user?.email
			);
			return matchingInstructor;
		},
	});
	return [isInstructor, isInstructorLoading];
};

export default useInstructor;
