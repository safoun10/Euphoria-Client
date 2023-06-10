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

import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { RoleProvider } from "./providers/RoleProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RoleProvider>
				<ThemeProvider>
					<QueryClientProvider client={queryClient}>
						<RouterProvider router={router} />
						<ToastContainer />
					</QueryClientProvider>
				</ThemeProvider>
			</RoleProvider>
		</AuthProvider>
	</React.StrictMode>
);
