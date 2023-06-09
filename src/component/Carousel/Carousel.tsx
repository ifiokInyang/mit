import React, { useState } from "react";
import mitakaVideo from "../../assets/mitaka-video.mp4";
import { motion } from "framer-motion";
import NavbarVariant from "../FramerMotion/Framer";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../../utils/CSSProps/CssProps";
import { Link } from "react-router-dom";

const Carousel = () => {
	const [isLoading, setIsLoading] = useState(true);

	const returnMessage = (message: string) => {
		return (
			<div className="flex flex-col items-center sm:ml-8 ss:ml-2 ss:pt-8 sm:pt-0">
				<motion.h4
					className="text"
					variants={NavbarVariant.typingContainer}
					initial="hidden"
					animate="show"
				>
					{Array.from(`${message}`).map((word, i) => (
						<motion.span
							className="text-[white] lg:text-[24px]"
							key={i}
							variants={NavbarVariant.typingText}
						>
							{word}
						</motion.span>
					))}
				</motion.h4>
				<Link to={"/quotation"}>
					<button
						type="button"
						className="bg-gradient-to-r from-[#52462d] to-blue-900 h-[50px] w-[250px] sm:hidden md:block sm:my-4 ss:my-2 sm:ml-4 ss:ml-0 hover:to-[#f2bf4b] hover:from-blue-700 transition duration-500 delay-150 hover:scale-110 hover:-translate-y-1 ease-in-out text-white font-semibold py-2 px-4 rounded"
					>
						Get an instant quote!
					</button>
				</Link>
			</div>
		);
	};
	const greeting: () => JSX.Element = () => {
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
			{isLoading && (
				<div className="flex justify-center items-center md:text-[68px] sm:text-[32px] ss:text-[20px] sm:pt-[150px] ss:pt-[20px]">
					<ClipLoader
						color={"blue"}
						loading={isLoading}
						cssOverride={override}
						size={50}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</div>
			)}
			{/* <video
        src={mitakaVideo}
        width="100%"
        className=""
        height="240px"
        autoPlay
        muted
        loop
      /> */}
			<video
				width="100%"
				className=""
				height="240px"
				onLoadedData={() => {
					setIsLoading(false);
				}}
				autoPlay
				muted
				loop
			>
				<source src={mitakaVideo} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div className="flex items-center sm:text-[20px] absolute ss:top-10 sm:top-0 left-0 text-white h-[150px] text-base bg-gray-500 bg-opacity-90 w-full">
				{greeting()}
			</div>
		</div>
	);
};

export default Carousel;
