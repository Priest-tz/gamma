import React, { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="bg-white shadow-md select-none">
			{/* Mobile Navbar */}
			<div className="flex items-center justify-between px-4 py-4 md:hidden">
				<button
					onClick={toggleMobileMenu}
					aria-label="Toggle menu"
					className="p-2 text-gray-800 hover:bg-gray-500 rounded-md z-50">
					{isMobileMenuOpen ? (
						<X className="w-8 h-8" />
					) : (
						<Menu className="w-8 h-8" />
					)}
				</button>
				<div className="font-roboto text-2xl font-semibold text-gray-800">
					GAMMA
				</div>
				<ShoppingCart className="w-6 h-6 text-productblue" />
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-gray-700">
					<button
						onClick={toggleMobileMenu}
						aria-label="Close menu"
						className="absolute top-4 right-4 p-2 text-gray-800 hover:bg-gray-500 rounded-md">
						<X className="w-8 h-8" />
					</button>
					<ul className="text-center space-y-6 text-productblack font-medium text-gilroy">
						<li className="cursor-pointer text-xl">Jacket</li>
						<li className="cursor-pointer text-xl">Tops</li>
						<li className="cursor-pointer text-xl">Skirts</li>
						<li className="cursor-pointer text-xl">Pants</li>
						<li className="cursor-pointer text-xl">Accessories</li>
					</ul>
				</div>
			)}

			{/* Desktop Navbar */}
			<div className="hidden md:flex items-center justify-between px-8 py-6 mx-28">
				<ul className="flex space-x-8 text-productblack font-medium text-gilroy text-lg">
					<li className="cursor-pointer">Jacket</li>
					<li className="cursor-pointer">Tops</li>
					<li className="cursor-pointer">Skirts</li>
					<li className="cursor-pointer">Pants</li>
					<li className="cursor-pointer">Accessories</li>
				</ul>
				<div className="text-4xl font-roboto font-medium text-productblack">
					GAMMA
				</div>
				<div className="flex items-center space-x-4">
					<div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 bg-greybg w-60 mx-4">
						<input
							type="text"
							placeholder="Search"
							className="outline-none px-4 text-base text-gray-700 bg-greybg w-full"
						/>
						<Search className="text-gray-500 text-xs" />
					</div>
					<ShoppingCart className="text-xl text-productblue" />
					<button className="text-base text-white bg-productblue px-6 py-2 rounded-3xl">
						Sign In
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
