import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import partnerOne from "../../assets/partner-australis.png";
import partnerTwo from "../../assets/partner-hitachi.png";
import PartnerVariant from "../FramerMotion/Framer";

const Partners = () => {
	const [refOne, inViewOne] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	}) as unknown as [React.RefObject<HTMLImageElement>, boolean];

	const [refTwo, inViewTwo] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	}) as unknown as [React.RefObject<HTMLImageElement>, boolean];

	const message = "We partner with top brands to meet their energy needs";

	return (
		<>
			<div>
				<h1>We partner with top brands to meet their energy needs</h1>
				<motion.h4
					className="text"
					variants={PartnerVariant.typingContainer}
					initial="hidden"
					animate="show"
				>
					{Array.from(`${message}`).map((word, i) => (
						<motion.span
							className="text-[white] lg:text-[24px]"
							key={i}
							variants={PartnerVariant.typingText}
						>
							{word}
						</motion.span>
					))}
				</motion.h4>
			</div>
			<div className="flex flex-wrap">
				<motion.img
					src={partnerOne}
					alt="australis-company-logo"
					className="object-contain"
					variants={PartnerVariant.imgOne}
					ref={refOne}
					initial="hidden"
					animate={inViewOne ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerTwo}
					alt="hitachi-company-logo"
					className="object-contain"
					variants={PartnerVariant.imgTwo}
					ref={refTwo}
					initial="hidden"
					animate={inViewTwo ? "show" : "hidden"}
				/>
			</div>
		</>
	);
};

export default Partners;
