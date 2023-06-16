import React from "react";
import aboutImg from "../../assets/about-us.png";
import engineer from "../../assets/engineer-mitaka.webp";

const AboutSub = () => {
	return (
		<div className="">
			<img
				src={aboutImg}
				alt="about image-mitaka"
				className="md:h-[500px] w-full object-cover"
			/>
			<div className="flex flex-wrap justify-around py-8 bg-red-200">
				<div className="flex-1 w-32 bg-blue-500 p-8 space-y-8">
					<h1 className="text-[28px] font-bold">Our Focus</h1>

					<p>
						Mitaka Trade Africa is a Japanese/Nigerian partnership with a focus
						on using ultra long-life battery technology to build energy
						solutions, to better infrastructure, and to improve lives.
					</p>
					<p>
						{" "}
						Our goal is to provide the technology and equipment to the wide
						range of industries that rely on stable uninterrupted access to
						energy in order to help build a productive and self reliant African
						continent.
					</p>
					<p>
						{" "}
						We use our patented ultra long-life battery technology to create
						solutions that far exceed currently available energy solutions in
						efficiency, longevity and cost effectiveness.
					</p>
					<p>
						We believe in the untapped potential of the African continent and
						are focused on supporting its sustainable growth and development.
					</p>
				</div>
				<div className="flex-1 w-32 bg-blue-100">
					<img src={engineer} alt="engineer working on fuse box" />
				</div>
			</div>
		</div>
	);
};

export default AboutSub;
