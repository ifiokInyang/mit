import React, { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./component/Chat/Chat";
import Projects from "./pages/Projects/Projects";
import Announcement from "./component/Announcement/Announcement";
import Navbar from "./component/Navbar/Navbar";

const Chart = lazy(async () => await import("./pages/Chart/Chart"));

const About = lazy(async () => await import("./component/About/About"));
const Contacts = lazy(async () => await import("./component/Contact/Contacts"));
const Products = lazy(
	async () => await import("./component/Products/Products")
);
const Services = lazy(
	async () => await import("./component/Services/Services")
);
const Home = lazy(async () => await import("./pages/Home/Home"));
const Quotation = lazy(async () => await import("./pages/Quotation/Quotation"));

// import { Toaster } from "react-hot-toast";

function AppRoutes() {
	useEffect(() => {
		const handleScroll = () => {
			localStorage.setItem("scrollPosition", window.pageYOffset.toString());
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const previousScroll = localStorage.getItem("scrollPosition");
		const scrollPosition = previousScroll !== null ? +previousScroll : 0;
		window.scrollTo(0, scrollPosition);
	}, []);

	return (
		<React.Fragment>
			<Announcement />
			<Navbar />
			<Routes>
				{/* <Toaster /> */}
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contacts />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
				<Route path="/services" element={<Services />} />
				<Route path="/chart" element={<Chart />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/quotation" element={<Quotation />} />
			</Routes>
			<Chat />
		</React.Fragment>
	);
}
export default AppRoutes;
