import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../../component/Form/Form";

const Quote = () => {
	function calculateQuotation(
		bulbs: number,
		fans: number,
		tv: number,
		computer: number,
		refrigerator: number,
		freezer: number,
		ac: number
	) {
		const capacities = [
			{
				inverterCapacity: 0.8,
				numberOfBatteries: 1,
				bulbs: 3,
				fans: 2,
				tv: 1,
				computer: 1,
				refrigerator: 0,
				freezer: 0,
				ac: 0,
			},
			{
				inverterCapacity: 1.4,
				numberOfBatteries: 2,
				bulbs: 5,
				fans: 4,
				tv: 1,
				computer: 1,
				refrigerator: 0,
				freezer: 0,
				ac: 0,
			},
			{
				inverterCapacity: 3.5,
				numberOfBatteries: 4,
				bulbs: 5,
				fans: 6,
				tv: 2,
				computer: 2,
				refrigerator: 1,
				freezer: 0,
				ac: 0,
			},
			{
				inverterCapacity: 5.0,
				numberOfBatteries: 8,
				bulbs: 5,
				fans: 6,
				tv: 2,
				computer: 2,
				refrigerator: 1,
				freezer: 1,
				ac: 1,
			},
		];

		let inverterCapacity = "Unknown";
		let numberOfBatteries = "Unknown";

		for (const capacity of capacities) {
			if (
				bulbs <= capacity.bulbs &&
				fans <= capacity.fans &&
				tv <= capacity.tv &&
				computer <= capacity.computer &&
				refrigerator <= capacity.refrigerator &&
				freezer <= capacity.freezer &&
				ac <= capacity.ac
			) {
				inverterCapacity = `${capacity.inverterCapacity}KVa`;
				numberOfBatteries = `${capacity.numberOfBatteries}KVa`;
				break;
			}
		}
		return {
			inverterCapacity,
			numberOfBatteries,
		};
	}

	useEffect(() => {
		calculateQuotation(4, 5, 3, 4, 1, 1, 0);
	}, []);

	// Example usage
	const quotation = calculateQuotation(6, 7, 2, 2, 1, 1, 1);
	// console.log("Inverter Capacity: ", quotation.inverterCapacity);
	// console.log(`Number of 200amp Batteries: ${quotation.numberOfBatteries}`);

	return (
		<div className="bg-gradient-to-b from-[#593e02] to-[#faa805] py-24 h-auto">
			<div className="flex flex-col items-center justify-evenly text-base w-full">
				<div className="lg:space-y-8 ss:space-y-2 md:w-[80vw] ss:w-[90vw]">
					<h1 className="md:text-[24px] ss:text-[12px] text-white font-bold lg:tracking-widest leading-loose">
						Didn't find what you were looking for on our{" "}
						<Link
							to="/chart"
							className="text-[red] underline hover:text-[blue]"
						>
							Power Chart?
						</Link>{" "}
						<br />
						Enter your load in the form and we will get back to you shortly.
					</h1>
				</div>
				<div
					className="my-8 rounded-2xl"
					style={{ boxShadow: "4px 8px 45px red" }}
				>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Quote;
