import React from "react";
import aboutImg from "../../assets/about-us.png";
import engineer from "../../assets/engineer-mitaka.webp";
import drBen from "../../assets/Dr Ben.png";
import gm from "../../assets/gm.png";
import mrIfeanyi from "../../assets/Mr Ifeanyi.png";
import mrKoji from "../../assets/Mr Koji.png";

const AboutSub = () => {
	return (
		<div className="">
			<img
				src={aboutImg}
				alt="about image-mitaka"
				className="md:h-[500px] w-full object-cover"
			/>
			<div className="flex flex-wrap ss:flex-col md:flex-row justify-around py-8 bg-[#fbf5f5]">
				<div className="flex-1 w-full p-8 space-y-8">
					<h1 className="text-[28px] font-bold">Our Focus</h1>

					<p className="text-[20px] font-medium">
						Mitaka Trade Africa is a Japanese/Nigerian partnership with a focus
						on using ultra long-life battery technology to build energy
						solutions, to better infrastructure, and to improve lives.
					</p>
					<p className="text-[20px] font-medium">
						{" "}
						Our goal is to provide the technology and equipment to the wide
						range of industries that rely on stable uninterrupted access to
						energy in order to help build a productive and self reliant African
						continent.
					</p>
					<p className="text-[20px] font-medium">
						{" "}
						We use our patented ultra long-life battery technology to create
						solutions that far exceed currently available energy solutions in
						efficiency, longevity and cost effectiveness.
					</p>
					<p className="text-[20px] font-medium">
						We believe in the untapped potential of the African continent and
						are focused on supporting its sustainable growth and development.
					</p>
				</div>
				<div className="flex justify-center flex-1 w-full">
					<img
						src={engineer}
						alt="engineer working on fuse box"
						className="object-contain"
					/>
				</div>
			</div>
			<div className="md:px-8 ss:px-2 space-y-8 bg-[#fcfcfa]">
				<h1 className="text-[28px] font-bold pt-8">Our People</h1>
				<p className="text-[24px] font-medium">
					Meet the individuals behind the Mitaka vision
				</p>
				<div className="flex flex-wrap justify-center space-x-2 space-y-4 items-center">
					<img src={mrKoji} alt="Mr Koji's profile picture" className="pt-3" />
					<img src={drBen} alt="Dr Ben's profile picture" />
					<img src={gm} alt="GM's profile picture" />
					<img src={mrIfeanyi} alt="Mr Ifeanyi's profile picture" />
				</div>
			</div>
			<div className="flex flex-wrap justify-center space-x-8 bg-gradient-to-b from-[#000000] to-[#faa805] h-auto mt-8 py-8">
				<div
					className="flex flex-col md:pl-8 ss:pl-2 justify-center h-[600px] md:w-[400px] ss:w-[300px] bg-[#1c170c] rounded-lg text-[#FFD700] font-bold"
					style={{ boxShadow: "4px 8px 55px red" }}
				>
					<p className="text-[24px] font-medium">Why We are the best...</p>

					<p className="text-[34px]">Mitaka Vision &amp; Mission</p>
				</div>
				<div className="lg:w-[50vw] ss:w-full space-y-8">
					<div>
						<p className="text-[#FFD700] text-[34px] font-bold">Our Mission</p>
						<p className="text-[white] md:text-[30px] ss:text-[24px]">
							To boost the productive capacity and wellbeing of households and
							businesses by solving energy fluctuation problems
						</p>
					</div>
					<div>
						<p className="text-[#FFD700] text-[34px] font-bold">Our Vision</p>
						<p className="text-[white] md:text-[30px] ss:text-[24px]">
							To scientifically solve the energy fluctuation problems and light
							up the world through topnotch technologically adaptive energy
							powering solutions and optimum client satisfaction
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSub;
