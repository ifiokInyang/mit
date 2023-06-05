import React, { useEffect, lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Chat from "./component/Chat/Chat";
import { override } from "./utils/CSSProps/CssProps";
import ClipLoader from "react-spinners/ClipLoader";

const About = lazy(async () => await import("./component/About/About"));
const Contacts = lazy(async () => await import("./component/Contact/Contacts"));
const Products = lazy(
	async () => await import("./component/Products/Products")
);
const Services = lazy(
	async () => await import("./component/Services/Services")
);
const Home = lazy(async () => await import("./pages/Home/Home"));
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
			<Chat />
			<Footer />
		</React.Fragment>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Suspense
				fallback={
					<div>
						<ClipLoader
							color={"blue"}
							loading={true}
							cssOverride={override}
							size={100}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					</div>
				}
			>
				<AppRoutes />
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
