import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div className="fs-4">
				No one shall be subjected to arbitrary arrest, detention or
				exile. Everyone is entitled in full equality to a fair and
				public hearing by an independent and impartial tribunal, in the
				determination of his rights and obligations and of any criminal
				charge against him. No one shall be subjected to arbitrary
				interference with his privacy, family, home or correspondence,
				nor to attacks upon his honour and reputation. Everyone has the
				right to the protection of the law against such interference or
				attacks.
			</div>
		),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
