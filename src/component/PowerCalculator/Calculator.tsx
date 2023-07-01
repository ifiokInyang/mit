import React from "react";
import CalculatorTable from "./CalculatorTable";

const Calculator = () => {

	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold">Calculate your power consumption</h1>
			<h1 className="text-[24px] font-medium py-8">
				Use our "Power Calculator" to know how much energy you consume (in KwH)
				and the inverter capacity, battery and solar panels you need for
				constant power supply.
			</h1>
			<CalculatorTable />
		</div>
	);
};

export default Calculator;
