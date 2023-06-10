import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Auth from "../src/pages/auth/Auth";
import Login from "../src/components/login/Login";
import Register from "../src/components/register/Register";
import Instructors from "../src/pages/instructors/Instructors";
import Classes from "../src/pages/classes/Classes";
import Dashboard from "../src/pages/dashboard/Dashboard";
import ErrPage from "../src/pages/errPage/ErrPage";
import PrivateRoute from "../src/privateRoutes/userPrivateRoute/PrivateRoute";
import UserSelectedClasses from "../src/components/userSelectedClasses/UserSelectedClasses";
import UserEnrolledClasses from "../src/components/userEnrolledClasses/userEnrolledClasses";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Auth></Auth>,
		children: [
			{
				path: "/",
				element: <Navigate to="/home"></Navigate>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "/home",
		element: <Home></Home>,
	},
	{
		path: "/instructors",
		element: <Instructors></Instructors>,
	},
	{
		path: "/classes",
		element: <Classes></Classes>,
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		children: [
			{
				path: "user-selected-classes",
				element: <UserSelectedClasses></UserSelectedClasses>,
			},
			{
				path: "user-enrolled-classes",
				element: <UserEnrolledClasses></UserEnrolledClasses>,
			},
		],
	},
	{
		path: "*",
		element: <ErrPage></ErrPage>,
	},
]);

export default router;
