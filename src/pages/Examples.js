import React from "react";
import { Outlet } from "react-router-dom";

import Page from "../layouts/Page";
import Sidebar from "../layouts/Sidebar";
import "../assets/css/examples.css";

const Examples = () => {
	return (
		<Page>
			<Sidebar />

			<div className="form-container">
				<Outlet />
			</div>
		</Page>
	);
};

export default Examples;

