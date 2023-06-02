import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import About from "./component/About/About";
import Contacts from "./component/Contact/Contacts";
import Footer from "./component/Footer/Footer";
import Products from "./component/Products/Products";
import Services from "./component/Services/Services";
import Home from "./pages/Home/Home";
// import { Toaster } from "react-hot-toast";

function AppRoutes() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<React.Fragment>
			<Routes>
				{/* <Toaster /> */}
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contacts />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
				<Route path="/services" element={<Services />} />
			</Routes>
			<Footer />
		</React.Fragment>
	);
}

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}
export default App;
