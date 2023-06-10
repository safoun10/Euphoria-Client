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
import AddAClass from "../src/components/addAClass/AddAClass";
import InstructorClasses from "../src/components/instructorClasses/InstructorClasses";
import InstructorFeedback from "../src/components/instructorFeedback/InstructorFeedback";
import AdminManageClasses from "../src/components/adminManageClasses/AdminManageClasses";
import AdminManageUsers from "../src/components/adminManageUsers/AdminManageUsers";
import DefaultDash from "../src/components/defaultDash/DefaultDash";

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
				path : "/dashboard",
				element: <DefaultDash></DefaultDash>
			},
			{
				path: "user-selected-classes",
				element: <UserSelectedClasses></UserSelectedClasses>,
			},
			{
				path: "user-enrolled-classes",
				element: <UserEnrolledClasses></UserEnrolledClasses>,
			},
			{
				path: "instructor-add-a-class",
				element: <AddAClass></AddAClass>,
			},
			{
				path: "instructor-classes",
				element: <InstructorClasses></InstructorClasses>,
			},
			{
				path: "instructor-feedbacks",
				element: <InstructorFeedback></InstructorFeedback>,
			},
			{
				path: "admin-manage-classes",
				element: <AdminManageClasses></AdminManageClasses>,
			},
			{
				path: "admin-manage-users",
				element: <AdminManageUsers></AdminManageUsers>,
			},
		],
	},
	{
		path: "*",
		element: <ErrPage></ErrPage>,
	},
]);

export default router;
