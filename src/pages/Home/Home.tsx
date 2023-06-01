import React from "react";
import Benefits from "../../component/Benefits/Benefits";
import Carousel from "../../component/Carousel/Carousel";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Services from "../../component/Services/Services";

const Home = () => {
	return (
		<>
			<Navbar />
			<Carousel />
			<Benefits />
			{/* <Footer /> */}
		</>
	);
};

export default Home;
