import React from "react";

const socialmedia = () => {
	return (
		<div className="flex flex-col md:flex-row  py-10 w-full">
			<div className="flex justify-start md:items-start my-12 md:my-0">
				<span className=" px-4 md:px-12 md:text-5xl  text-3xl font-bold font-silk text-productblue">
					Social Media
				</span>
			</div>

			{/* Mobile View */}
			<div className="flex flex-col space-y-6 w-full md:hidden"></div>

			{/* Desktop View */}
			<div className="hidden md:flex w-full space-x-6 px-10"></div>
		</div>
	);
};

export default socialmedia;
