import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Auth from "../src/pages/auth/Auth";
import Login from "../src/components/login/Login";
import Register from "../src/components/register/Register";
import Instructors from "../src/pages/instructors/Instructors";

const router = createBrowserRouter([
	{
		path: "/",
		element:<Auth></Auth>,
		children: [
			{
				path : "/",
				element : <Navigate to="/home"></Navigate>
			},
			{
				path: "/login",
				element : <Login></Login>
			},
			{
				path: "/register",
				element : <Register></Register>
			}
		]
	},
	{
		path: "/home",
		element: <Home></Home>
	},
	{
		path: "/instructors",
		element: <Instructors></Instructors>
	}
]);

export default router;
