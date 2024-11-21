import React from "react";

const bestseller = () => {
	return (
		<div className="py-8">
			<div className="flex justify-start my-12">
				<span className="px-4 md:px-12 md:text-5xl  text-3xl font-bold font-silk text-productblue">
					Best Selling
				</span>
			</div>
			{/* Mobile View */}
			<div className="flex flex-col w-full md:hidden">
				<div className="flex flex-col">
					<div className="bg-gray-200 overflow-hidden relative shadow-md">
						<img
							src="images/bestsellermobile1.png"
							alt="bestseller1"
							className="w-full object-cover"
						/>
						<div className="absolute inset-0 flex justify-center items-center pb-4 bg-black bg-opacity-10 text-white font-light text-xl">
							<button className="bg-black rounded-3xl bg-opacity-50 px-10 py-3 font-extralight text-lg">
								View More
							</button>
						</div>
					</div>
					<div className="bg-gray-200 overflow-hidden shadow-md">
						<img
							src="images/bestsellermobile2.png"
							alt="bestseller2"
							className="w-full object-cover"
						/>
					</div>
					<div className="bg-gray-200 overflow-hidden shadow-md">
						<img
							src="images/bestsellermobile3.png"
							alt="bestseller3"
							className="w-full object-cover"
						/>
					</div>
				</div>
			</div>

			{/* Desktop View */}
			<div className="hidden md:flex w-full space-x-4 px-12">
				<div className="flex space-x-2 w-full relative">
					<div className="bg-gray-200 overflow-hidden relative shadow-md flex-1">
						<img
							src="images/bestseller1.png"
							alt="bestseller1"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 flex justify-center items-center pb-4 bg-black bg-opacity-10 text-white font-light text-xl">
							<button className="bg-black rounded-3xl bg-opacity-40 px-14 py-4 font-extralight text-lg">
								View More
							</button>
						</div>
					</div>
					<div className="flex flex-col flex-1 space-y-2">
						<div className="bg-gray-200 overflow-hidden relative shadow-md flex-1">
							<img
								src="images/bestseller2.png"
								alt="bestseller2"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex space-x-2 flex-1">
							<div className="bg-gray-200 overflow-hidden relative shadow-md flex-1">
								<img
									src="images/bestseller3.png"
									alt="bestseller3"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="bg-gray-200 overflow-hidden relative shadow-md flex-1">
								<img
									src="images/bestseller4.png"
									alt="bestseller4"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
					<div className="absolute inset-0 flex justify-end items-center pb-4 bg-black bg-opacity-10 text-white font-light text-xl">
						<button className="bg-black rounded-l-3xl bg-opacity-60 px-3 py-20 font-extralight text-3xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-chevron-right">
								<path d="m9 18 6-6-6-6" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default bestseller;
