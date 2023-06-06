import React, { useEffect } from "react";

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
		<div className="mt-32">
			<h1>
				Getting a quotation to power your hotels, factories, estates, homes and
				more, just got simplified.
			</h1>
			<h1>
				Power Your World with "Solar + Ultra Long Mitaka Batteries" by
				discovering your Quotation in Minutes.
			</h1>
		</div>
	);
};

export default Quote;
