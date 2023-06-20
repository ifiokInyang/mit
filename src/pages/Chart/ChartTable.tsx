import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../component/CustomStyles/CustomStyles";
import "./Chart.css";

const ChartTable = () => {
	return (
		<div
			className="tableContainer"
			style={{ background: "linear-gradient(to bottom, #593e02, #faa805)"}}
		>
			<table>
				<caption className="tableTitle">
					Mitaka ESTIMATED Power Requirement Chart
				</caption>
				<caption className="text-red-500 text-[20px] font-bold">
					N/B: This is an estimated energy audit, If your load exceeds a 30KVa
					Inverter capacity, kindly{" "}
					<Link
						to="/contact"
						target={"_blank"}
						className="underline text-blue-500"
					>
						contact us{" "}
					</Link>
					for a proper energy audit.
				</caption>
				<thead>
					<tr>
						<th scope="col" className="md:w-[60px] lg:w-auto font-extrabold">
							BULB
						</th>
						<th scope="col" className="md:w-[60px] lg:w-auto font-extrabold">
							FAN
						</th>
						<th scope="col" className="md:w-[60px] lg:w-auto font-extrabold">
							TV
						</th>
						<th scope="col" className="md:w-[109px] lg:w-auto font-extrabold">
							COMPUTER
						</th>
						<th scope="col" className="font-extrabold">
							REFRIG-
							<br />
							ERATOR
						</th>
						<th scope="col" className="font-extrabold">
							FREEZER
						</th>
						<th scope="col" className="font-extrabold">
							A/C
						</th>
						<th
							scope="col"
							className="md:w-[94px] lg:w-auto text-red-500 font-extrabold"
						>
							{" "}
							NO. OF 200amps BATTERY
						</th>
						<th
							scope="col"
							className="md:w-[99px] lg:w-auto text-red-500 font-extrabold"
						>
							INVERTER CAPACITY (KVA)
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td data-label="BULB" className={`${styles.chartHover}`}>
							3
						</td>
						<td data-label="FAN" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="TV" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="COMPUTER" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="REFRIGERATOR" className={`${styles.chartHover}`}>
							0
						</td>
						<td data-label="FREEZER" className={`${styles.chartHover}`}>
							0
						</td>
						<td data-label="A/C" className={`${styles.chartHover}`}>
							0
						</td>
						<td
							data-label="NO. OF 200amps BATTERY"
							className={`${styles.chartHover} text-red-500`}
						>
							1
						</td>
						<td
							data-label="INVERTER CAPACITY (KVA)"
							className={`${styles.chartHover}  text-red-500`}
						>
							0.8
						</td>
					</tr>
					<tr>
						<td data-label="BULB" className={`${styles.chartHover}`}>
							5
						</td>
						<td data-label="FAN" className={`${styles.chartHover}`}>
							4
						</td>
						<td data-label="TV" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="COMPUTER" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="REFRIGERATOR" className={`${styles.chartHover}`}>
							0
						</td>
						<td data-label="FREEZER" className={`${styles.chartHover}`}>
							0
						</td>
						<td data-label="A/C" className={`${styles.chartHover}`}>
							0
						</td>
						<td
							data-label="NO. OF 200amps BATTERY"
							className={`${styles.chartHover} text-red-500`}
						>
							2
						</td>
						<td
							data-label="INVERTER CAPACITY (KVA)"
							className={`${styles.chartHover} text-red-500`}
						>
							1.4
						</td>
					</tr>
					<tr>
						<td data-label="BULB" className={`${styles.chartHover}`}>
							5
						</td>
						<td data-label="FAN" className={`${styles.chartHover}`}>
							6
						</td>
						<td data-label="TV" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="COMPUTER" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="REFRIGERATOR" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="FREEZER" className={`${styles.chartHover}`}>
							0
						</td>
						<td data-label="A/C" className={`${styles.chartHover}`}>
							0
						</td>
						<td
							data-label="NO. OF 200amps BATTERY"
							className={`${styles.chartHover} text-red-500`}
						>
							4
						</td>
						<td
							data-label="INVERTER CAPACITY (KVA)"
							className={`${styles.chartHover} text-red-500`}
						>
							3.5
						</td>
					</tr>
					<tr>
						<td data-label="BULB" className={`${styles.chartHover}`}>
							5
						</td>
						<td data-label="FAN" className={`${styles.chartHover}`}>
							6
						</td>
						<td data-label="TV" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="COMPUTER" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="REFRIGERATOR" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="FREEZER" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="A/C" className={`${styles.chartHover}`}>
							1
						</td>
						<td
							data-label="NO. OF 200amps BATTERY"
							className={`${styles.chartHover} text-red-500`}
						>
							8
						</td>
						<td
							data-label="INVERTER CAPACITY (KVA)"
							className={`${styles.chartHover} text-red-500`}
						>
							5.0
						</td>
					</tr>
					<tr>
						<td data-label="BULB" className={`${styles.chartHover}`}>
							6
						</td>
						<td data-label="FAN" className={`${styles.chartHover}`}>
							6
						</td>
						<td data-label="TV" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="COMPUTER" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="REFRIGERATOR" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="FREEZER" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="A/C" className={`${styles.chartHover}`}>
							1
						</td>
						<td
							data-label="NO. OF 200amps BATTERY"
							className={`${styles.chartHover} text-red-500`}
						>
							10
						</td>
						<td
							data-label="INVERTER CAPACITY (KVA)"
							className={`${styles.chartHover} text-red-500`}
						>
							7.5
						</td>
					</tr>
					<tr>
						<td data-label="BULB" className={`${styles.chartHover}`}>
							7
						</td>
						<td data-label="FAN" className={`${styles.chartHover}`}>
							7
						</td>
						<td data-label="TV" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="COMPUTER" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="REFRIGERATOR" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="FREEZER" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="A/C" className={`${styles.chartHover}`}>
							2
						</td>
						<td
							data-label="NO. OF 200amps BATTERY"
							className={`${styles.chartHover} text-red-500`}
						>
							15
						</td>
						<td
							data-label="INVERTER CAPACITY (KVA)"
							className={`${styles.chartHover} text-red-500`}
						>
							10
						</td>
					</tr>
					<tr>
						<td data-label="BULB" className={`${styles.chartHover}`}>
							8
						</td>
						<td data-label="FAN" className={`${styles.chartHover}`}>
							7
						</td>
						<td data-label="TV" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="COMPUTER" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="REFRIGERATOR" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="FREEZER" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="A/C" className={`${styles.chartHover}`}>
							3
						</td>
						<td
							data-label="NO. OF 200amps BATTERY"
							className={`${styles.chartHover} text-red-500`}
						>
							30
						</td>
						<td
							data-label="INVERTER CAPACITY (KVA)"
							className={`${styles.chartHover} text-red-500`}
						>
							15
						</td>
					</tr>
					<tr>
						<td data-label="BULB" className={`${styles.chartHover}`}>
							10
						</td>
						<td data-label="FAN" className={`${styles.chartHover}`}>
							8
						</td>
						<td data-label="TV" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="COMPUTER" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="REFRIGERATOR" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="FREEZER" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="A/C" className={`${styles.chartHover}`}>
							4
						</td>
						<td
							data-label="NO. OF 200amps BATTERY"
							className={`${styles.chartHover} text-red-500`}
						>
							30
						</td>
						<td
							data-label="INVERTER CAPACITY (KVA)"
							className={`${styles.chartHover} text-red-500`}
						>
							20
						</td>
					</tr>
					<tr>
						<td data-label="BULB" className={`${styles.chartHover}`}>
							12
						</td>
						<td data-label="FAN" className={`${styles.chartHover}`}>
							8
						</td>
						<td data-label="TV" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="COMPUTER" className={`${styles.chartHover}`}>
							2
						</td>
						<td data-label="REFRIGERATOR" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="FREEZER" className={`${styles.chartHover}`}>
							1
						</td>
						<td data-label="A/C" className={`${styles.chartHover}`}>
							5
						</td>
						<td
							data-label="NO. OF 200amps BATTERY"
							className={`${styles.chartHover} text-red-500`}
						>
							30
						</td>
						<td
							data-label="INVERTER CAPACITY (KVA)"
							className={`${styles.chartHover} text-red-500`}
						>
							30
						</td>
					</tr>
				</tbody>
			</table>
			<p className="mt-8 font-medium text-[24px]">
				For a proper energy audit on your homes, factories, office spaces,
				estates, hospitals, hotels, supermarkets, etc.
			</p>
			<p className="mt-8 font-medium text-[24px]">
				Call our 24/7 Customer Support on +234(0)803-838-4141,
				+234(0)706-470-3021.
			</p>
		</div>
	);
};

export default ChartTable;
