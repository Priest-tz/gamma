import React from "react";

const maincategories = () => {
	return (
		<div className="px-12 py-8">
			<div className="flex justify-start my-12">
				<span className="text-3xl font-bold font-silk text-productblue">
					Main Categories
				</span>
			</div>
			{/* Mobile View */}
			<div className="flex overflow-x-auto space-x-2 md:hidden">
				{/* Card */}
				<div className="flex-shrink-0 w-2/3 md:w-1/5 relative">
					<div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
						<img
							src="images/mainmobile1.png"
							alt="Jackets"
							className="w-full object-cover"
						/>
						<div className="absolute inset-0 flex justify-center items-end pb-4 bg-opacity-10 text-white font-light text-xl">
							Jackets
						</div>
					</div>
				</div>
				<div className="flex-shrink-0 w-2/3 md:w-1/5 relative">
					<div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
						<img
							src="images/mainmobile2.png"
							alt="tops"
							className="w-full object-cover"
						/>
						<div className="absolute inset-0 flex justify-center items-end pb-4 bg-opacity-10 text-white font-light text-xl">
							Tops
						</div>
					</div>
				</div>
				<div className="flex-shrink-0 w-2/3 md:w-1/5 relative">
					<div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
						<img
							src="images/skirts.png"
							alt="Skirts"
							className="w-full object-cover"
						/>
						<div className="absolute inset-0 flex justify-center items-end pb-4 bg-opacity-10 text-white font-light text-xl">
							Skirts
						</div>
					</div>
				</div>
				<div className="flex-shrink-0 w-2/3 md:w-1/5 relative">
					<div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
						<img
							src="images/pants.png"
							alt="Pants"
							className="w-full object-cover"
						/>
						<div className="absolute inset-0 flex justify-center items-end pb-4 bg-opacity-10 text-white font-light text-xl">
							Pants
						</div>
					</div>
				</div>
				<div className="flex-shrink-0 w-2/3 md:w-1/5 relative">
					<div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
						<img
							src="images/accessories.png"
							alt="Accessories"
							className="w-full object-cover"
						/>
						<div className="absolute inset-0 flex justify-center items-end pb-4 bg-opacity-10 text-white font-light text-xl">
							Accessories
						</div>
					</div>
				</div>
			</div>

			{/* Desktop View */}
			<div className="hidden md:flex space-x-4">
				<div className="w-1/5">
					<div className="bg-gray-200 rounded-lg overflow-hidden shadow-md relative">
						<img
							src="images/jackets.png"
							alt="Jackets"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-10 text-white px-3 py-1 rounded text-2xl font-light">
							Jackets
						</div>
					</div>
				</div>
				<div className="w-1/5">
					<div className="bg-gray-200 rounded-lg overflow-hidden shadow-md relative">
						<img
							src="images/tops.png"
							alt="Tops"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-10 text-white px-3 py-1 rounded text-2xl font-light">
							Tops
						</div>
					</div>
				</div>
				<div className="w-1/5">
					<div className="bg-gray-200 rounded-lg overflow-hidden shadow-md relative">
						<img
							src="images/skirts.png"
							alt="Skirts"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-10 text-white px-3 py-1 rounded text-2xl font-light">
							Skirts
						</div>
					</div>
				</div>
				<div className="w-1/5">
					<div className="bg-gray-200 rounded-lg overflow-hidden shadow-md relative">
						<img
							src="images/pants.png"
							alt="Pants"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-10 text-white px-3 py-1 rounded text-2xl font-light">
							Pants
						</div>
					</div>
				</div>
				<div className="w-1/5">
					<div className="bg-gray-200 rounded-lg overflow-hidden shadow-md relative">
						<img
							src="images/accessories.png"
							alt="Accessories"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-10 text-white px-3 py-1 rounded text-2xl font-light">
							Accessories
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default maincategories;
