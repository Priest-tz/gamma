import React, { useState, useEffect } from "react";

const Imageslider = () => {
	// Default images
	const imagesDesktop = [
		"/images/Homepage2.png",
		"/images/homepage.png",
		"/images/Homepage3.png",
	];
	const imagesMobile = [
		"/images/Homepage2.png",
		"/images/homepagemobile.png",
		"/images/Homepage3.png",
	];

	const labels = ["One", "Two", "Three"];
	const [currentImage, setCurrentImage] = useState(1);
	const [isMobile, setIsMobile] = useState(false);

	// Detect mobile view
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Set images based on viewport size
	const images = isMobile ? imagesMobile : imagesDesktop;

	// Change image manually
	const changeImage = (index) => {
		setCurrentImage(index);
	};

	return (
		<div className="relative w-full h-screen overflow-hidden">
			{/* Image Display */}
			<div className="h-full w-full flex items-center justify-center bg-black">
				<img
					src={images[currentImage]}
					alt={`Slide ${labels[currentImage]}`}
					className="w-full h-full object-cover object-center"
				/>
			</div>

			{/* Mobile Navigation */}
			<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:hidden">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => changeImage(index)}
						className={`w-3 h-3 rounded-full transform transition-transform duration-300 ${
							currentImage === index
								? "scale-125 bg-white"
								: "scale-60 bg-white opacity-80"
						}`}></button>
				))}
			</div>

			{/* Desktop Navigation */}
			<div className="hidden sm:flex sm:absolute sm:top-1/2 sm:right-5 sm:transform sm:-translate-y-1/2 sm:flex-col sm:space-y-4">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => changeImage(index)}
						className={`py-2 px-4 rounded-lg text-white transition-transform duration-300 ${
							currentImage === index
								? "font-extrabold scale-150"
								: "font-light scale-80"
						}`}>
						{labels[index]}
					</button>
				))}
			</div>
		</div>
	);
};

export default Imageslider;
