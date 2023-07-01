import React from "react";
import Benefits from "../../component/Benefits/Benefits";
import Carousel from "../../component/Carousel/Carousel";
import Partners from "../../component/Partners/Partners";
import Solutions from "../../component/Solutions/Solutions";
import Calculator from "../../component/PowerCalculator/Calculator";

const Home = () => {
	return (
		<>
			<Carousel />
			<Calculator />
			<Solutions />
			<Benefits />
			<Partners />
		</>
	);
};

export default Home;
