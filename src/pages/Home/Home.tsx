import React, { useEffect, useState } from "react";
import Benefits from "../../component/Benefits/Benefits";
import Carousel from "../../component/Carousel/Carousel";
import Partners from "../../component/Partners/Partners";
import Solutions from "../../component/Solutions/Solutions";
import Calculator from "../../component/PowerCalculator/Calculator";
import HomeModal from "../../component/Modal/HomeModal";

const Home = () => {
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {

			setShow(true);
		}, 7000)
	}, []);

	return (
		<>
			{show && <HomeModal showModal={show} setShowModal={setShow}/>}
			<Carousel />
			<Calculator />
			<Solutions />
			<Benefits />
			<Partners />
		</>
	);
};

export default Home;
