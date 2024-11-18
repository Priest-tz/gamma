import React from "react";
import Navbar from "../components/Navbar";
import Imageslider from "../components/imageslide";

const Homepage = () => {
	return (
		<div className="w-full h-screen flex flex-col">
			<Navbar />
			<Imageslider />
		</div>
	);
};

export default Homepage;
