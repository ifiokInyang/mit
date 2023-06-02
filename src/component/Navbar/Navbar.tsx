import React from "react";
import logo from "../../assets/mitaka-logo-trans.png";

const Navbar = () => {
	return (
		<div className="h-[150px]">
			<nav className="bg-gradient-to-r from-[#000000] to-[#c89116] dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between">
					<a href="#" className="flex items-start">
						<img
							src={logo}
							className="lg:mr-12 md:mr-0"
							alt="Mitaka Logo"
							width="200px"
						/>
						{/* <span className="self-center lg:text-xl sm:text-base font-semibold whitespace-nowrap dark:text-white"></span> */}
					</a>
					<div className="flex md:order-2">
						<button
							type="button"
							className="bg-gradient-to-r from-[#52462d] to-blue-900 h-[50px] hover:to-[#f2bf4b] hover:from-blue-700 transition duration-500 delay-150 hover:scale-110 hover:-translate-y-1 ease-in-out text-white lg:font-semibold sm:font-medium py-2 px-4 rounded"
						>
							Get a Quote
						</button>
						<button
							data-collapse-toggle="navbar-sticky"
							type="button"
							className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-sticky"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
					<div
						className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
						id="navbar-sticky"
					>
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row sm:space-x-4 lg:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<a
									href="/"
									className="block py-2 pl-3 pr-4 lg:text-xl sm:text-base sm:text-base text-white bg-blue-700 rounded md:bg-transparent md:hover:text-[#f9c151] md:text-[white] hover:-translate-x-1 ease-in-out md:p-0 md:dark:text-blue-500"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="/about"
									className="block py-2 pl-3 pr-4 lg:text-xl sm:text-base text-[white] rounded hover:bg-gray-100 md:hover:bg-transparent hover:-translate-x-1 ease-in-out md:hover:text-[#f9c151] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="/products"
									className="block py-2 pl-3 pr-4 lg:text-xl sm:text-base text-[white] rounded hover:bg-gray-100 hover:-translate-x-1 ease-in-out md:hover:bg-transparent md:hover:text-[#f9c151] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Products
								</a>
							</li>
							<li>
								<a
									href="/services"
									className="block py-2 pl-3 pr-4 lg:text-xl sm:text-base text-[white] rounded hover:bg-gray-100 hover:-translate-x-1 ease-in-out md:hover:bg-transparent md:hover:text-[#f9c151] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="/projects"
									className="block py-2 pl-3 pr-4 lg:text-xl sm:text-base text-[white] rounded hover:bg-gray-100 hover:-translate-x-1 ease-in-out md:hover:bg-transparent md:hover:text-[#f9c151] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="block py-2 pl-3 pr-4 lg:text-xl sm:text-base text-[white] rounded hover:bg-gray-100 md:hover:bg-transparent hover:-translate-x-1 ease-in-out md:hover:text-[#f9c151] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
