import React, { useState } from "react";
import { styles } from "../CustomStyles/CustomStyles";
import "../../pages/Chart/Chart.css";
import { IRowData } from "../../utils/interfaces";
import { fillInput } from "./CalculatorFunc";

const CalculatorTable = () => {
	const [selectedValue, setSelectedValue] = useState("");
	const [watts, setWatts] = useState<number>();
	const [hours, setHours] = useState<number>();
	const [quantity, setQuantity] = useState<number>();
	const [rows, setRows] = useState<IRowData[]>([]);

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
									<option value="Dish washer">Dish Washer</option>
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
					{rows.map((row: IRowData) => (
						<>
							<tr key={row.id}>
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
											<option value="Dish washer">Dish Washer</option>
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
							<button onClick={() => handleRemoveRow(row.id)}>
								Remove Row
							</button>
						</>
					))}
				</tbody>
			</table>
			<button onClick={handleAddRow}>Add Row</button>
		</div>
	);
};

export default CalculatorTable;
