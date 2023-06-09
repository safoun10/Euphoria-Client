import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "../routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<ThemeProvider>
				<RouterProvider router={router} />
				<ToastContainer />
			</ThemeProvider>
		</AuthProvider>
	</React.StrictMode>
);
