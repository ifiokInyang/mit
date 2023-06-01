import React from "react";
import mitakaVideo from "../../assets/mitaka-home-video.mp4";
import { motion } from "framer-motion";
import NavbarVariant from "./Framer";

const Carousel = () => {
	const returnMessage = (message: string) => {
		return (
			<div className="flex items-center">
				<motion.h4
					className="text"
					variants={NavbarVariant.typingContainer}
					initial="hidden"
					animate="show"
				>
					{Array.from(`${message}`).map((word, i) => (
						<motion.span key={i} variants={NavbarVariant.typingText}>
							{word}
						</motion.span>
					))}
				</motion.h4>
				;
				{/* <p className="lg:ml-16 lg:mr-8 md:ml-0 font-normal lg:text-[25px] text-[white] lg:w-[900px] text-center md:leading-10">
          {message}
        </p> */}
				<button
					type="button"
					className="bg-gradient-to-r from-[#52462d] to-blue-900 h-[50px] lg:w-[150px] md:w-[200px] sm:hidden md:block my-4 ml-4 hover:to-[#f2bf4b] hover:from-blue-700 transition duration-500 delay-150 hover:scale-110 hover:-translate-y-1 ease-in-out text-white font-semibold py-2 px-4 rounded"
				>
					Start Here!
				</button>
			</div>
		);
	};
	const greeting = () => {
		const currentHour = new Date().getHours();
		const morningMessage =
			"Good morning, Save 80% of your Power Cost with our high performance battery with nano carbon silica technology.";
		const noonMessage =
			"Good afternoon, Mitaka is the only company in the world that gives you 10 years battery warranty.";

		const eveningMessage =
			"Good evening, Mitaka can give you UNINTERRUPTED power supply for your home, factories, plants, estates, hotels, event centers, community, etc.";
		if (currentHour >= 5 && currentHour < 12) {
			return returnMessage(morningMessage);
		} else if (currentHour >= 12 && currentHour < 18) {
			return returnMessage(noonMessage);
		} else {
			return returnMessage(eveningMessage);
		}
	};

	return (
		<div className="relative">
			<video width="100%" className="" height="140" autoPlay muted loop>
				<source src={mitakaVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="flex items-center absolute top-0 left-0 text-white h-[100px] text-base bg-gray-500 bg-opacity-90 w-full">
				{greeting()}
			</div>
		</div>
	);
};

export default Carousel;

{
	/* <motion.p
  className="text"
  variants={NavbarVariant.typingContainer}
  initial="hidden"
  animate="show"
>
  {Array.from('Coffee Nature').map((word, i) => (
    <motion.span key={i} variants={NavbarVariant.typingText}>
      {word}
    </motion.span>
  ))}
</motion.p>; */
}
