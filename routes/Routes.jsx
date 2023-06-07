import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Auth from "../src/pages/auth/Auth";
import Login from "../src/components/login/Login";
import Register from "../src/components/register/Register";
import Instructors from "../src/pages/instructors/Instructors";
import Classes from "../src/pages/classes/Classes";
import Dashboard from "../src/pages/dashboard/Dashboard";
import ErrPage from "../src/pages/errPage/ErrPage";

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
	},
	{
		path: "/classes",
		element: <Classes></Classes>
	},
	{
		path: "/dashboard",
		element: <Dashboard></Dashboard>
	},
	{
		path: "*",
		element: <ErrPage></ErrPage>
	}

]);

export default router;
