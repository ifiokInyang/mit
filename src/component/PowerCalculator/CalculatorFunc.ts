// export const tableData = [
// 	{
// 		dataLabel: "Appliance",
// 		value: 3,
// 	},
// 	{
// 		dataLabel: "Power Rating (Watts)",
// 		value: 2,
// 	},
// 	{
// 		dataLabel: "Average Daily Usage (Hours)",
// 		value: 1,
// 	},
//     { dataLabel: "Quantity", value: 2 },

// ];
export const fillInput = (
	value: string,
	setWatts: React.Dispatch<React.SetStateAction<number | undefined>>,
	setHours: React.Dispatch<React.SetStateAction<number | undefined>>,
	setQuantity: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
	if (value === "Refridgerator") {
		setWatts(300);
		setHours(7);
		setQuantity(1);
	}
	if (value === "TV") {
		setWatts(70);
		setHours(10);
		setQuantity(1);
	}
	if (value === "Air Conditioner") {
		setWatts(600);
		setHours(8);
		setQuantity(1);
	}
	if (value === "Cloth Dryer") {
		setWatts(3000);
		setHours(4);
		setQuantity(1);
	}
	if (value === "Desktop Computer") {
		setWatts(100);
		setHours(8);
		setQuantity(1);
	}
	if (value === "Freezer") {
		setWatts(200);
		setHours(20);
		setQuantity(1);
	}
	if (value === "Fan") {
		setWatts(70);
		setHours(8);
		setQuantity(1);
	}
	if (value === "Washing Machine") {
		setWatts(2000);
		setHours(3);
		setQuantity(1);
	}
	if (value === "Pumping Machine") {
		setWatts(735);
		setHours(3);
		setQuantity(1);
	}
	if (value === "Microwave Oven") {
		setWatts(800);
		setHours(3);
		setQuantity(1);
	}
	if (value === "Dish Washer") {
		setWatts(1600);
		setHours(3);
		setQuantity(1);
	}
	if (value === "Heater") {
		setWatts(2000);
		setHours(3);
		setQuantity(1);
	}
	if (value === "Laptop Computer") {
		setWatts(80);
		setHours(10);
		setQuantity(1);
	}
	if (value === "Pressing Iron") {
		setWatts(2000);
		setHours(3);
		setQuantity(1);
	}
	if (value === "Electric Kettle") {
		setWatts(2000);
		setHours(3);
		setQuantity(1);
	}
};
