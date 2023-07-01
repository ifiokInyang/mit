import { IRowData } from "../../utils/interfaces";

export const fillInput = (
	value: string,
	setWatts: React.Dispatch<React.SetStateAction<number | undefined>>,
	setHours: React.Dispatch<React.SetStateAction<number | undefined>>,
	setQuantity: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
	if (value === "Refridgerator") {
		setWatts(300);
		setHours(8);
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

export const fillDynamicRow = (
	value: string,
	row: IRowData,
	rows: IRowData[],
	setRows: React.Dispatch<React.SetStateAction<IRowData[]>>
) => {
	if (value === "Refridgerator") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 300,
						hours: 8,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "TV") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 70,
						hours: 10,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Air Conditioner") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 600,
						hours: 8,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Cloth Dryer") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 3000,
						hours: 4,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Desktop Computer") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 100,
						hours: 8,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Freezer") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 200,
						hours: 20,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Fan") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 70,
						hours: 8,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Washing Machine") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 2000,
						hours: 3,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Pumping Machine") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 735,
						hours: 3,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Microwave Oven") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 800,
						hours: 3,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Dish Washer") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 1600,
						hours: 3,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Heater") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 2000,
						hours: 3,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Laptop Computer") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 80,
						hours: 10,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Pressing Iron") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 2000,
						hours: 3,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
	if (value === "Electric Kettle") {
		const updatedRows = rows.map((r) =>
			r.id === row.id
				? {
						...r,
						selectedValue: value,
						watts: 2000,
						hours: 3,
						quantity: 1,
				  }
				: r
		);
		setRows(updatedRows);
	}
};
