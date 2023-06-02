import React from "react";
import Benefits from "../../component/Benefits/Benefits";
import Carousel from "../../component/Carousel/Carousel";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Services from "../../component/Services/Services";
import Solutions from "../../component/Solutions/Solutions";

const Home = () => {
	return (
		<>
			<Navbar />
			<Carousel />
			<Solutions />
			<Benefits />
			{/* <Footer /> */}
		</>
	);
};

export default Home;
