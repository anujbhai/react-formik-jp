import React from "react";
import {Link} from "react-router-dom";

import "./Nav.css";

const Nav = () => {
	return (
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="examples">Examples</Link></li>
		</ul>
	);
};

export default Nav;

