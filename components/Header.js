import React, { useState } from "react";
import Link from "next/link";
import { Cross, Home, Hamburger, External } from "./Icons";

const Header = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const toggleMenu = () => {
		setMobileNavOpen(!mobileNavOpen);
	};

	return (
		<nav className="bg-primary text-secondary shadow-lg sticky w-full top-0 z-10">
			{/* desktop nav */}
			<div className="max-w-6xl mx-auto px-2">
				<div className="flex justify-between">
					{/* left part */}
					<div className="flex space-x-4">
						<div>
							<Link href="/">
								<div className="flex items-center py-5 px-2 text-highlight cursor-pointer">
									<Home />
									<span className="font-bold text-2xl ml-4 ">subhasis.dev</span>
								</div>
							</Link>
						</div>
					</div>
					{/* right part */}
					<div className="hidden md:flex items-center justify-between space-x-1">
						<ul className="my-auto mx-4 list-none flex items-center">
							<li className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200">
								<Link href="/#home">Home</Link>
							</li>
							<li className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200">
								<Link href="/#about">About</Link>
							</li>
							<li className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200">
								<Link href="/#projects">Projects</Link>
							</li>
							<li className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200">
								<Link href="/#certifications">Certifications</Link>
							</li>
							<li className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200">
								<Link href="/contact">Contact</Link>
							</li>
							<li className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200">
								<Link href="/blog">Blog</Link>
							</li>
						</ul>
					</div>

					{/* mobile view menu button  */}
					<div className="md:hidden flex items-center mr-2">
						<button className="button" onClick={toggleMenu}>
							{mobileNavOpen ? <Cross /> : <Hamburger />}
						</button>
					</div>
				</div>
			</div>

			{/* mobile nav sidebar */}
			<div
				className={`md:hidden bg-primary text-secondary shadow-xl px-2 w-64 h-full fixed top-0 left-0 opacity-100  ${
					mobileNavOpen ? "translate-x-0" : "-translate-x-full"
				} transition duration-200 ease-in-out`}
			>
				{/* logo */}
				<Link href="/">
					<div
						className="flex items-center py-5 px-2 text-secondary cursor-pointer"
						onClick={toggleMenu}
					>
						<Home />
						<span className="font-bold ml-4">subhasis.dev</span>
					</div>
				</Link>
				{/**options */}
				<div className="flex flex-col">
					<ul className="my-auto mx-4 list-none flex flex-col items-start">
						<li
							onClick={toggleMenu}
							className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200"
						>
							<Link href="/#home">Home</Link>
						</li>
						<li
							onClick={toggleMenu}
							className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200"
						>
							<Link href="/#about">About</Link>
						</li>
						<li
							onClick={toggleMenu}
							className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200"
						>
							<Link href="/#projects">Projects</Link>
						</li>
						<li
							onClick={toggleMenu}
							className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200"
						>
							<Link href="/#certifications">Certifications</Link>
						</li>
						<li
							onClick={toggleMenu}
							className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200"
						>
							<Link href="/contact">Contact</Link>
						</li>
						<li
							onClick={toggleMenu}
							className="mx-2 p-2 text-lg cursor-pointer hover:text-xl hover:underline hover:text-highlight transition duration-200"
						>
							<Link href="/blog">Blog</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
