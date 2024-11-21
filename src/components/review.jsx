import React from "react";

const StarRating = ({ rating }) => {
	const totalStars = 5;

	return (
		<div className="flex">
			{[...Array(totalStars)].map((_, index) => (
				<svg
					key={index}
					className={`w-6 h-6 ${
						index < rating ? "text-yellow-400" : "text-gray-300"
					}`}
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					aria-hidden="true">
					<path
						fillRule="evenodd"
						d="M10 15.27l5.18 3.09-1.39-5.88L18 7.24l-6.07-.52L10 1 8.07 6.72 2 7.24l4.21 5.24-1.39 5.88L10 15.27z"
						clipRule="evenodd"
					/>
				</svg>
			))}
		</div>
	);
};

const review = () => {
	return (
		<div className="flex flex-col md:flex-row  py-10 w-full">
			<div className="flex justify-start md:items-start my-12 md:my-0">
				<span className=" px-4 md:px-12 md:text-5xl  text-3xl font-bold font-silk text-productblue">
					Reviews
				</span>
			</div>

			{/* Mobile View */}
			<div className="flex flex-col space-y-6 w-full md:hidden">
				<div className="bg-gray-200 overflow-hidden relative shadow-md ">
					<img
						src="images/review1.png"
						alt="review1"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 flex flex-col justify-end items-center pb-4 bg-black bg-opacity-30 text-white font-light text-sm">
						<span>
							“These are the best pants ever!! I have several
							pairs in different colors & LOVE them!! They’re
							super soft & the colored “jeans” do not look...”
						</span>
						<div className="mt-2">
							<StarRating rating={4} />{" "}
						</div>
					</div>
				</div>

				<div className="bg-gray-200 overflow-hidden relative shadow-md ">
					<img
						src="images/review4.png"
						alt="review2"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 flex flex-col justify-end items-center pb-4 bg-black bg-opacity-30 text-white font-light text-sm">
						<span>
							““This sweater is a bulky, fairly heavy winter
							sweater that will be awesome for the office or
							casual wear. The fabric is very silky soft. It’s
							nice and...””
						</span>
						<div className="mt-2">
							<StarRating rating={5} />{" "}
						</div>
					</div>
				</div>

				<div className="bg-gray-200 overflow-hidden relative shadow-md ">
					<img
						src="images/review2.png"
						alt="review3"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 flex flex-col justify-end items-center pb-4 bg-black bg-opacity-30 text-white font-light text-sm">
						<span>
							““Excellent shirt! Very comfortable and it has a
							soft lining which keeps you warm. Great shirt, i
							wear it almost daily. It’s not water-proof so...””
						</span>
						<div className="mt-2">
							<StarRating rating={3} />{" "}
						</div>
					</div>
				</div>
			</div>

			{/* Desktop View */}
			<div className="hidden md:flex w-full space-x-6 px-10">
				<div className="flex flex-col bg-white overflow-hidden space-y-2 w-1/4">
					<img src="images/review1.png" alt="review1" />
					<div className="flex flex-col items-center pb-4 text-black font-light text-normal">
						<span>
							“These are the best pants ever!! I have several
							pairs in different colors & LOVE them!! They’re
							super soft & the colored ‘jeans’ do not look...”
						</span>
						<div className="mt-2">
							<StarRating rating={4} />
						</div>
					</div>
				</div>

				<div className="flex flex-col bg-white overflow-hidden space-y-2 w-1/4">
					<img src="images/review2.png" alt="review2" />
					<div className="flex flex-col items-center pb-4 text-black font-light text-normal">
						<span>
							“This sweater is a bulky, fairly heavy winter
							sweater that will be awesome for the office or
							casual wear. The fabric is very silky soft. It’s
							nice and...”
						</span>
						<div className="mt-2">
							<StarRating rating={5} />
						</div>
					</div>
				</div>

				<div className="flex flex-col bg-white overflow-hidden space-y-2 w-1/4">
					<img src="images/review4.png" alt="review3" />
					<div className="flex flex-col items-center pb-4 text-black font-light text-normal">
						<span>
							“Excellent shirt! Very comfortable and it has a soft
							lining which keeps you warm. Great shirt, I wear it
							almost daily. It’s not water-proof so...”
						</span>
						<div className="mt-2">
							<StarRating rating={3} />
						</div>
					</div>
				</div>

				<div className="relative flex flex-col bg-white overflow-hidden space-y-2 w-1/4">
					<img src="images/review3.png" alt="review4" />
					<div className=" flex flex-col justify-center items-center pb-4 text-black font-light text-normal">
						<span>
							“These are so comfortable! Love the rubber heel.
							Also, light boot. I have a wide foot, so the wide
							size makes it so I do not have to break them in,
							they...”
						</span>
						<div className="mt-2">
							<StarRating rating={3} />
						</div>
						<div className="absolute top-[35%]  right-0 flex justify-end items-center pb-4 bg-opacity-10 text-white font-light text-xl">
							<button className="bg-black rounded-l-3xl bg-opacity-60 px-4 py-2 font-extralight text-3xl">
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
									className="lucide lucide-chevron-right">
									<path d="m9 18 6-6-6-6" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default review;
