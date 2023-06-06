import React from "react";
import Benefits from "../../component/Benefits/Benefits";
import Carousel from "../../component/Carousel/Carousel";
import Chat from "../../component/Chat/Chat";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Partners from "../../component/Partners/Partners";
import Services from "../../component/Services/Services";
import Solutions from "../../component/Solutions/Solutions";

const Home = () => {
	return (
		<>
			<Navbar />
			<Carousel />
			<Solutions />
			<Benefits />
			<Partners />
			{/* <Chat /> */}
			<Footer />
		</>
	);
};

export default Home;
