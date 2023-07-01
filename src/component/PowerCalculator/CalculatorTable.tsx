import React, { useState } from "react";
import { styles } from "../CustomStyles/CustomStyles";
import "../../pages/Chart/Chart.css";
import { IRowData } from "../../utils/interfaces";
import { fillDynamicRow, fillInput } from "./CalculatorFunc";

const CalculatorTable = () => {
	const [selectedValue, setSelectedValue] = useState("");
	const [watts, setWatts] = useState<number>();
	const [hours, setHours] = useState<number>();
	const [quantity, setQuantity] = useState<number>();
	const [rows, setRows] = useState<IRowData[]>([]);
	const [isPower, setIspower] = useState<boolean>(false);
	const [load, setLoad] = useState<string>("");

	const handleAddRow = () => {
		const newRow: IRowData = {
			id: Date.now(),
			selectedValue: "",
			watts: undefined,
			hours: undefined,
			quantity: undefined,
		};
		setRows([...rows, newRow]);
	};
	const handleRemoveRow = (rowId: number) => {
		const filteredRow = rows.filter((row: IRowData) => {
			return row.id !== rowId;
		});
		setRows(filteredRow);
		setLoad("");
	};

	const handleWattsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setWatts(Number(value));
	};

	const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setHours(Number(value));
	};

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setQuantity(Number(value));
	};
	function handleCalculatePowerUsage() {
		const Energy =
			typeof watts === "number" &&
			typeof hours === "number" &&
			typeof quantity === "number"
				? ((watts * hours) / 1000) * quantity
				: null;
		const loadArrCalculator =
			rows.length !== 0
				? rows.reduce((accum: number, row: IRowData) => {
						const powerCalc =
							row.watts !== undefined &&
							row.hours !== undefined &&
							row.quantity !== undefined
								? ((row.watts * row.hours) / 1000) * row.quantity
								: null;
						if (powerCalc !== null) {
							accum += powerCalc;
						}
						return accum;
				  }, 0)
				: null;
		setIspower(true);
		setLoad(
			watts !== undefined && hours !== undefined && quantity !== undefined
				? `Your power usage is ${(
						Number(loadArrCalculator) + Number(Energy)
				  ).toFixed(1)}KwH`
				: "Kindly select an appliance"
		);

		return `${(Number(loadArrCalculator) + Number(Energy)).toFixed(1)}KwH`;
	}

	const inverterRequirements = (load: string) => {
		let message = "";
		const regex = /\d+(\.\d+)?/;
		const match = load.match(regex);
		let number;

		if (match != null) {
			number = parseFloat(match[0]);
		} else {
			console.log("No number found in the string.");
		}
		if (number !== undefined) {
			if (number < 0.09) {
				message = "";
				return message;
			}
			if (number > 0.09 && number <= 0.8) {
				message = `So you will require ${number}KVa inverter and 1 Mitaka battery`;
				return message;
			}
			if (number > 0.8 && number <= 1.4) {
				message = `So you will require ${number}KVa inverter and 2 Mitaka batteries`;
				return message;
			}
			if (number > 1.4 && number <= 3.5) {
				message = `So you will require ${number}KVa inverter and 4 Mitaka batteries`;
				return message;
			}
			if (number > 3.5 && number <= 5.0) {
				message = `So you will require ${number}KVa inverter and 8 Mitaka batteries`;
				return message;
			}
			if (number > 5.0 && number <= 7.5) {
				message = `So you will require ${number}KVa inverter and 10 Mitaka batteries`;
				return message;
			}
			if (number > 7.5 && number <= 10) {
				message = `So you will require ${number}KVa inverter and 15 Mitaka batteries`;
				return message;
			}
			if (number > 10 && number <= 30) {
				message = `So you will require ${number}KVa inverter and 30 Mitaka batteries`;
				return message;
			}
			if (number > 30) {
				message = `Your load exceeds a 30KVa inverter capacity, kindly contact support on +234(0)803-838-4141, +234(0)706-470-3021 for a proper energy audit.`;
				return message;
			}
		}
	};
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th scope="col" className="font-extrabold">
							Appliance
						</th>
						<th scope="col" className="font-extrabold">
							Power Rating (Watts)
						</th>
						<th scope="col" className="font-extrabold">
							Average Daily Usage (Hours)
						</th>
						<th scope="col" className="font-extrabold">
							Quantity
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td
							data-label={"Appliance"}
							className={`${styles.calculatorTable}`}
						>
							<select
								className="selectGroup"
								name="numbers"
								id="numbers"
								value={selectedValue}
								onChange={(e) => {
									const { value } = e.target;
									setSelectedValue(value);
									fillInput(value, setWatts, setHours, setQuantity);
									setLoad("");
								}}
							>
								<optgroup label="rows">
									<option value="">--Select Appliance--</option>
									<option value="Refridgerator">Refridgerator</option>
									<option value="TV">TV</option>
									<option value="Air Conditioner">Air Conditioner</option>
									<option value="Cloth Dryer">Cloth Dryer</option>{" "}
									<option value="Desktop Computer">Desktop Computer</option>{" "}
									<option value="Freezer">Freezer</option>{" "}
									<option value="Fan">Fan</option>
									<option value="Washing Machine">Washing Machine</option>{" "}
									<option value="Pumping Machine">Pumping Machine</option>{" "}
									<option value="Microwave Oven">Microwave Oven</option>
									<option value="Dish Washer">Dish Washer</option>
									<option value="Heater">Heater</option>
									<option value="Laptop Computer">Laptop Computer</option>{" "}
									<option value="Pressing Iron">Pressing Iron</option>
									<option value="Electric Kettle">Electric Kettle</option>
								</optgroup>
							</select>
						</td>
						<td data-label={"Power Rating (Watts)"}>
							<input type="number" value={watts} onChange={handleWattsChange} />
						</td>
						<td data-label={"Average Daily Usage (Hours)"}>
							<input type="number" value={hours} onChange={handleHoursChange} />
						</td>
						<td data-label={"Quantity"}>
							<input
								type="number"
								value={quantity}
								onChange={handleQuantityChange}
							/>
						</td>
					</tr>
					{rows.map((row: IRowData, index: number) => (
						<>
							<tr key={index}>
								<td
									data-label={"Appliance"}
									className={`${styles.calculatorTable}`}
								>
									<select
										className="selectGroup"
										name="numbers"
										id="numbers"
										value={row.selectedValue}
										onChange={(e) => {
											const { value } = e.target;
											const updatedRows = rows.map((r) =>
												r.id === row.id ? { ...r, selectedValue: value } : r
											);
											setRows(updatedRows);
											fillDynamicRow(value, row, rows, setRows);
											setLoad("");
										}}
									>
										<optgroup label="rows">
											<option value="">--Select Appliance--</option>
											<option value="Refridgerator">Refridgerator</option>
											<option value="TV">TV</option>
											<option value="Air Conditioner">Air Conditioner</option>
											<option value="Cloth Dryer">Cloth Dryer</option>{" "}
											<option value="Desktop Computer">Desktop Computer</option>{" "}
											<option value="Freezer">Freezer</option>{" "}
											<option value="Fan">Fan</option>
											<option value="Washing Machine">
												Washing Machine
											</option>{" "}
											<option value="Pumping Machine">Pumping Machine</option>{" "}
											<option value="Microwave Oven">Microwave Oven</option>
											<option value="Dish Washer">Dish Washer</option>
											<option value="Heater">Heater</option>
											<option value="Laptop Computer">
												Laptop Computer
											</option>{" "}
											<option value="Pressing Iron">Pressing Iron</option>
											<option value="Electric Kettle">Electric Kettle</option>
										</optgroup>
									</select>
								</td>
								<td data-label={"Power Rating (Watts)"}>
									<input
										type="number"
										value={row.watts}
										onChange={(e) => {
											const { value } = e.target;
											const updatedRows = rows.map((r) =>
												r.id === row.id ? { ...r, watts: Number(value) } : r
											);
											setRows(updatedRows);
										}}
									/>
								</td>
								<td data-label={"Average Daily Usage (Hours)"}>
									<input
										type="number"
										value={row.hours}
										onChange={(e) => {
											const { value } = e.target;
											const updatedRows = rows.map((r) =>
												r.id === row.id ? { ...r, hours: Number(value) } : r
											);
											setRows(updatedRows);
										}}
									/>
								</td>
								<td data-label={"Quantity"}>
									<input
										type="number"
										value={row.quantity}
										onChange={(e) => {
											const { value } = e.target;
											const updatedRows = rows.map((r) =>
												r.id === row.id ? { ...r, quantity: Number(value) } : r
											);
											setRows(updatedRows);
										}}
									/>
								</td>
							</tr>
							<tr>
								{/* <div> */}
								<td colSpan={4} className="">
									<button
										className="bg-red-600 h-auto w-auto sm:my-4 ss:my-2 sm:ml-4 ss:ml-0 hover:to-[#f2bf4b] hover:from-blue-700 transition duration-500 delay-150 hover:scale-110 hover:-translate-y-1 ease-in-out text-white font-semibold py-2 px-4 rounded"
										onClick={() => handleRemoveRow(row.id)}
									>
										Remove Row
									</button>
								</td>
							</tr>
						</>
					))}
				</tbody>
			</table>

			<button
				type="button"
				onClick={handleAddRow}
				className="bg-blue-700 h-auto w-auto sm:my-4 ss:my-2 sm:ml-4 ss:ml-0 hover:to-[#f2bf4b] hover:from-blue-700 transition duration-500 delay-150 hover:scale-110 hover:-translate-y-1 ease-in-out text-white font-semibold py-2 px-4 rounded"
			>
				Add Row
			</button>
			{isPower && (
				<div className="flex flex-col justify-center items-center md:text-[38px] ss:text-[20px] font-bold">
					<p>{load} </p>
					<p>{inverterRequirements(load)}</p>
				</div>
			)}
			<div className="flex md:justify-center">
				<button
					type="button"
					onClick={handleCalculatePowerUsage}
					className="bg-gradient-to-r from-[#52462d] to-blue-900 h-[50px] w-auto sm:my-4 ss:my-2 sm:ml-4 ss:ml-0 hover:to-[#f2bf4b] hover:from-blue-700 transition duration-500 delay-150 hover:scale-110 hover:-translate-y-1 ease-in-out text-white font-semibold py-2 px-4 rounded"
				>
					Calculate Power Usage
				</button>
			</div>
		</div>
	);
};

export default CalculatorTable;
