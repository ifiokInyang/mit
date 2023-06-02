import React from "react";
import { useNavigate } from "react-router-dom";
import mitakaBattery from "../../assets/mitaka-battery.webp";
import Button from "../Button/ButtonSvg";
import solutionAsset from "../../assets/solutions-asset.jpeg";
import installationImage from "../../assets/installation.jpeg";

const Solutions = () => {
	const navigate = useNavigate();

	return (
		<div className="px-8 bg-[#f3f2f5]">
			<h5 className="sm:pt-4 ss:pt-10 text-4xl mb-8 font-bold tracking-tight text-gray-900 dark:text-white">
				Our Solutions{" "}
			</h5>
			<div className="flex flex-wrap justify-between mb-8">
				<img
					className="lg:h-[500px] sm:h-auto max-width-full w-full lg:object-cover sm:object-contain transition-all duration-300 rounded-3xl cursor-pointer filter grayscale hover:grayscale-0"
					src={mitakaBattery}
					alt="mitaka-battery-image"
					width="650px"
				/>
			</div>
			<div className="flex flex-wrap justify-between mb-8 w-full">
				<div className="w-[820px] bg-[#f7f0f0] rounded-[28px] p-8">
					<h1 className="md:font-bold sm:font-medium ss:font-bold md:tracking-wide sm:tracking-normal md:text-[36px] sm:text-[22px]">
						Our Ultra Long-Life batteries can be used for many different energy
						and power applications.
					</h1>
					<p className="md:font-medium md:leading-9 sm:leading-6 mb-8 md:text-[20px] sm:text-[16px]">
						Energy Storage for Solar Parks, Wind Parks, and Other Renewable
						Energy Projects. Emergency Power Backup for Hospitals, Bank ATMs and
						Commercial Buildings. Stand-by Backup Power for Macro Cell and Small
						Cell Site Telecom Towers. Starter & Operation Batteries for
						Forklifts, Trucks, Buses, Tippers, Diggers, and Other Industrial &
						Construction Machinery
					</p>
					<Button
						type={"button"}
						text={"Learn more"}
						onClick={() => navigate("/products")}
					/>
				</div>
				<img
					className="h-auto max-width-lg transition-all duration-300 rounded-3xl cursor-pointer"
					src={solutionAsset}
					alt="powering-africa-image"
					width="510px"
				/>
			</div>
			<div className="flex flex-wrap justify-between pb-8">
				<img
					className="h-auto max-width-lg object-cover transition-all duration-300 rounded-3xl cursor-pointer hover:grayscale-[20%]"
					src={installationImage}
					alt="engineers-installing-solar-inverter"
					width="600px"
				/>
				<div className="w-[730px] bg-[#f7f0f0] rounded-[28px] p-8">
					<h1 className="md:font-bold sm:font-medium ss:font-bold md:tracking-wide sm:tracking-normal md:text-[36px] sm:text-[22px]">
						Professional Installation Services
					</h1>
					<p className="md:font-medium md:leading-9 sm:leading-6 mb-8 md:text-[20px] sm:text-[16px]">
						We offer comprehensive installation services to ensure a seamless
						integration of our ultra long-life batteries into various energy and
						power applications. Our team of{" "}
						<strong>experienced engineers</strong> are equipped with the
						expertise and knowledge to handle installations for a wide range of
						industries, including: Solar farms, Estates, Factories, Hospitals,
						etc.
					</p>
					<Button
						type={"button"}
						text={"Learn more"}
						onClick={() => navigate("/products")}
					/>
				</div>
			</div>
		</div>
	);
};

export default Solutions;
