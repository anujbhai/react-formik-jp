import React from "react";

import "./Header.css";
import Nav from "../Nav";

const Header = () => {
	return (
		<div className="header">
			<div className="site-title">
				<h2>Forms Examples</h2>
			</div>	

			<div className="site-nav">
				<Nav />
			</div>
		</div>
	);
};

export default Header;

