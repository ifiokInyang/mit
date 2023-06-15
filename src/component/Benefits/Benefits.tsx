import React, { useState } from "react";
import efficiency from "../../assets/energy-efficiency.png";
import warranty from "../../assets/ten-year.png";
import Button from "../Button/ButtonSvg";
import battery from "../../assets/mitaka-battery.webp";

const Benefits = () => {
	const [isExpanded, setIsExpanded] = useState([false, false, false]);

	const handleToggle = (index: number) => {
		const expandedState = [...isExpanded];
		expandedState[index] = !expandedState[index];
		setIsExpanded(expandedState);
	};

	return (
		<div className="bg-[#f5f1e9]">
			<h5 className="pt-4 ml-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
				Benefits{" "}
			</h5>
			<div className="flex w-full justify-between flex-wrap px-8 pb-6">
				{/* Section 1 */}
				<div className="lg:max-w-sm md:max-w-[350px]  mt-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<img
						className="rounded-t-lg"
						src={warranty}
						alt="10-years-warranty"
					/>

					<div className="p-5">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Longevity and Warranty
						</h5>

						<h6 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
							Power that lasts a decade and beyond!{" "}
						</h6>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							"Introducing our revolutionary battery with Nano carbon silica
							technology, providing an{" "}
							<strong>unbeatable 10-year warranty.</strong> Say goodbye to
							premature battery replacements and enjoy uninterrupted power for
							years to come. Invest in reliability and peace of mind today!.
							"Experience the ultimate convenience with our battery featuring
							Nano carbon silica technology.
						</p>
						{isExpanded[0] && (
							<p className="mb-4">
								With a one-time installation cost, you'll enjoy a lifetime of
								High Performance constant energy supply. It's time to break free
								from frequent battery replacements and embrace long-lasting
								power efficiency."
							</p>
						)}
						<Button
							type={"button"}
							onClick={() => handleToggle(0)}
							condition={isExpanded[0]}
							text={"See less"}
							textTwo={"Read more"}
						/>
					</div>
				</div>

				{/* Section 2 */}
				<div className="lg:max-w-sm md:max-w-[350px] mt-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<img
						className="rounded-t-lg mb-16"
						src={efficiency}
						alt="energy-efficiency-image"
					/>

					<div className="p-5">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Energy Efficiency and Sustainability{" "}
						</h5>
						<h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
							Efficiency meets performance, in perfect harmony so you can Power
							up, sustainably!{" "}
						</h5>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							"Embrace a greener future with our energy-efficient battery. Our
							Nano carbon silica technology enhances battery performance,
							optimizing energy utilization and minimizing waste. Enjoy
							consistent power output while reducing your carbon footprint. It's
							time to power up, sustainably!"
						</p>
						{isExpanded[1] && (
							<p className="mb-4">
								"Discover the synergy of energy efficiency and superior
								performance with our battery powered by Nano carbon silica
								technology. Experience the best of both worlds as our battery
								provides a High Performance constant energy supply while
								maximizing energy utilization. It's the perfect harmony of
								efficiency and power!"
							</p>
						)}
						<Button
							type={"button"}
							onClick={() => handleToggle(1)}
							condition={isExpanded[1]}
							text={"See less"}
							textTwo={"Read more"}
						/>
					</div>
				</div>

				{/* Section 3 */}
				<div className="lg:max-w-sm md:max-w-[350px] px-8 pt-[48px] mt-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<img
						className="rounded-t-lg pb-[58px] h-[300px] object-cover"
						src={battery}
						alt="mitaka battery-image"
						width={"400px"}
					/>

					<div className="p-5">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Sulfation Prevention and Performance{" "}
						</h5>
						<h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
							Achieve Reliable power, without compromise with the power of Nano
							carbon silica technology.
						</h5>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							"Our battery harnesses the groundbreaking power of Nano carbon
							silica technology, acting as a catalyst to prevent sulfation. Bid
							farewell to sulfate build-up, voltage drop, and capacity loss.
							Experience unrivaled performance and extended battery life with
							our cutting-edge solution."
						</p>
						{isExpanded[2] && (
							<p className="mb-4">
								Trust in our product's High Performance constant energy supply,
								ensuring your devices never run out of power when you need it
								most.
							</p>
						)}
						<Button
							type={"button"}
							onClick={() => handleToggle(2)}
							condition={isExpanded[2]}
							text={"See less"}
							textTwo={"Read more"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
