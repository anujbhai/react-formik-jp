import React from "react";
import {Routes, Route} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Examples from "./pages/Examples";
import Header from "./layouts/Header";
import ResrvationForm from "./examples/MiniFormik";
import Invitation from "./examples/Arrays";

const App = () => {
	return (
		<>
			<Header />

			<div className="app-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="examples" element={<Examples />}>
						<Route
							index
							element={
								<main style={{ padding: '1rem' }}>
									<p>Select a form</p>
								</main>
							}
						/>
						<Route path="example1" element={<ResrvationForm />} />
						<Route path="example2" element={<Invitation />} />
					</Route>
					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There&#39;s nothing here!!</p>
							</main>
						}
					/>
				</Routes>
			</div>
		</>
	);
};

export default App;
