import React from "react";
import {Link} from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
	return (
		<aside>
			<ul>
				<li><Link to="/examples/example1">Mini Formik</Link></li>
				<li><Link to="/examples/example2">Main Formik</Link></li>
			</ul>
		</aside>
	);
};

export default Sidebar;

