import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import partnerOne from "../../assets/partner-australis.png";
import partnerTwo from "../../assets/partner-hitachi.png";
import partnerThree from "../../assets/partner-hyundai.svg";
import partnerFour from "../../assets/partner-kyb.png";
import partnerFive from "../../assets/partner-kyuokuto.png";
import partnerSix from "../../assets/partner-man.webp";
import partnerSeven from "../../assets/partner-mitsui.png";
import partnerEight from "../../assets/partner-rr.png";
import partnerNine from "../../assets/partner-samsung.png";
import partnerTen from "../../assets/partner-steel.png";
import partnerEleven from "../../assets/partner-sumitomo.png";
import partnerTwelve from "../../assets/partner-unitika.png";
import partnerThirteen from "../../assets/partners-ihi.png";
import partnerFourteen from "../../assets/partners-mitsubishi.png";
import PartnerVariant from "../FramerMotion/Framer";

// ... import other partner images and animations

const Partners = () => {
	const [ref, inView] = useInView({
		threshold: 0.1,
	});

	const message =
		"Our synergy of success lies in our partnerships with top brands to meet their energy needs.";

	useEffect(() => {
		if (inView) {
			// Perform any actions when the element comes into view
			// console.log("it is in view");
		}
	}, [inView]);

	return (
		<div className="px-12">
			<div>
				<h1 className="lg:text-[44px] font-bold text-center mb-4">
					Our Esteemed Partners
				</h1>
				<motion.h4
					className="text-center"
					variants={PartnerVariant.typingContainer}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				>
					{Array.from(message).map((word, i) => (
						<motion.span
							className="text-center lg:text-[24px] font-medium"
							key={i}
							variants={PartnerVariant.typingText}
						>
							{word}
						</motion.span>
					))}
				</motion.h4>
			</div>
			<div
				className="flex flex-wrap justify-around align-center my-12 lg:h-[500px] ss:h-auto"
				ref={ref}
			>
				<motion.img
					src={partnerOne}
					alt="australis-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgOne}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerTwo}
					alt="hitachi-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgTwo}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerThree}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgThree}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerFour}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgFour}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerFive}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgFive}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerSix}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgSix}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerSeven}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgSeven}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerEight}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgEight}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerNine}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgNine}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerTen}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgTen}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerEleven}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgEleven}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerTwelve}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgTwelve}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerThirteen}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgThirteen}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
				<motion.img
					src={partnerFourteen}
					alt="hyundai-company-logo"
					className="object-contain w-[100px] h-[100px]"
					variants={PartnerVariant.imgFourteen}
					initial="hidden"
					animate={inView ? "show" : "hidden"}
				/>
			</div>
		</div>
	);
};

export default Partners;
