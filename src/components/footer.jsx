import React from "react";
import { Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
	return (
		<div className="flex flex-col bg-productblue text-white font-gilroy py-6">
			{/* Mobile View */}
			<div className="flex flex-col w-full md:hidden space-y-6 px-6">
				<div className="text-center">
					<span className="font-roboto text-3xl font-light">
						GAMMA
					</span>
				</div>
				<div className="space-y-2">
					<h3 className="text-xl font-semibold">Customer Care</h3>
					<span className="block">07030579861</span>
					<span className="block text-sm">
						Weekdays 09:30 - 18:00 / Weekends 12:00 - 13:00
					</span>
					<span className="block text-sm">
						Holidays: Sat, Sun, National holidays
					</span>
				</div>
				<div className="space-y-2">
					<h3 className="text-xl font-semibold">Shipping Info</h3>
					<span className="block">Track Shipping Location</span>
					<span className="block">Refund/Exchange Address</span>
					<span className="block">ABC Lane, Example Address</span>
					<span className="block text-sm">
						(Please make sure to use Post Office Parcel service)
					</span>
				</div>
				<div className="flex flex-col items-center space-y-4">
					<span className="text-xl font-semibold">Follow Us</span>
					<div className="flex gap-4 text-white text-3xl">
						<Instagram className="hover:text-gray-300 transition-colors" />
						<Youtube className="hover:text-gray-300 transition-colors" />
						<Facebook className="hover:text-gray-300 transition-colors" />
					</div>
				</div>
				<div className="border-t border-white pt-4 text-center space-y-2">
					<div>
						<a href="#" className="hover:underline text-sm">
							Terms of Service
						</a>{" "}
						|{" "}
						<a href="#" className="hover:underline text-sm">
							Privacy Policy
						</a>
					</div>
					<span className="text-xs">
						2024 &copy; Gamma - All rights reserved
					</span>
				</div>
			</div>

			{/* Desktop View */}
			<div className="hidden md:flex w-full px-12 justify-between items-start space-x-8">
				<div className="flex flex-col space-y-4">
					<span className="font-roboto text-4xl font-light">
						GAMMA
					</span>
					<span className="text-sm">
						Your go-to platform for premium products and services.
					</span>
				</div>
				{/* Middle Sections */}
				<div className="space-y-4">
					<h3 className="text-xl font-semibold">Customer Care</h3>
					<span className="block">07030579861</span>
					<span className="block text-sm">
						Weekdays 09:30 - 18:00 / Weekends 12:00 - 13:00
					</span>
					<span className="block text-sm">
						Holidays: Sat, Sun, National holidays
					</span>
				</div>
				<div className="space-y-4">
					<h3 className="text-xl font-semibold">Shipping Info</h3>
					<span className="block">Track Shipping Location</span>
					<span className="block">Refund/Exchange Address</span>
					<span className="block">ABC Lane, Example Address</span>
				</div>
				{/* Social Media */}
				<div className="space-y-4 text-center">
					<h3 className="text-xl font-semibold">Follow Us</h3>
					<div className="flex gap-4 text-white text-3xl justify-center">
						<Instagram className="hover:text-gray-300 transition-colors" />
						<Youtube className="hover:text-gray-300 transition-colors" />
						<Facebook className="hover:text-gray-300 transition-colors" />
					</div>
				</div>
			</div>
			{/*  Bottom */}
			<div className="hidden md:flex border-t border-white pt-4 justify-between text-sm px-12 mt-6">
				<div>
					<a href="#" className="hover:underline">
						Terms of Service
					</a>{" "}
					|{" "}
					<a href="#" className="hover:underline">
						Privacy Policy
					</a>
				</div>
				<div>&copy; 2024 Gamma - All rights reserved</div>
			</div>
		</div>
	);
};

export default Footer;
