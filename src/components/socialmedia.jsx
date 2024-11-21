import React from "react";

const socialmedia = () => {
	return (
		<div className="flex flex-col py-10 w-full px-12 bg-productbg">
			<div className="flex justify-start py-12">
				<span className=" md:text-5xl  text-3xl font-bold font-silk text-productblue">
					Social Media
				</span>
			</div>

			{/* Mobile View */}
			<div className="flex flex-col w-full md:hidden">
				<div className="bg-gray-200 overflow-hidden relative shadow-md ">
					<img
						src="images/mobilesocialmedia1.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="bg-gray-200 overflow-hidden relative shadow-md ">
					<img
						src="images/mobilesocialmedia2.png"
						alt="socialmedia2"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="bg-gray-200 overflow-hidden relative shadow-md ">
					<img
						src="images/mobilesocialmedia3.png"
						alt="socialmedia3"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 flex flex-col justify-center items-center pb-4 bg-productblue bg-opacity-20 text-white font-light text-lg">
						<span>@instagramid</span>
					</div>
				</div>
			</div>

			{/* Desktop View */}
			<div className="hidden md:grid grid-cols-5 gap-4 w-full ">
				<div className="bg-gray-200  ">
					<img
						src="images/socialmedia1.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-gray-200  ">
					<img
						src="images/socialmedia2.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-gray-200  ">
					<img
						src="images/socialmedia3.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-gray-200  ">
					<img
						src="images/socialmedia4.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-gray-200  ">
					<img
						src="images/socialmedia5.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-gray-200  ">
					<img
						src="images/socialmedia6.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-gray-200  ">
					<img
						src="images/socialmedia7.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-gray-200  ">
					<img
						src="images/socialmedia8.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-gray-200  ">
					<img
						src="images/socialmedia9.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="relative bg-productblue  bg-opacity-80 ">
					<img
						src="images/socialmedia0.png"
						alt="socialmedia1"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 flex flex-col justify-center items-center pb-4  text-white font-light text-lg">
						<span>@instagramid</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default socialmedia;
