import { IFormProps } from "../../utils/interfaces";

export const FormFunc = (data: IFormProps) => {
	if (data.bulb === "") {
		data.bulb = 0;
	}
	if (data.fan === "") {
		data.fan = 0;
	}
	if (data.ac === "") {
		data.ac = 0;
	}
	if (data.freezer === "") {
		data.freezer = 0;
	}
	if (data.refrigerator === "") {
		data.refrigerator = 0;
	}
	if (data.tv === "") {
		data.tv = 0;
	}
	if (data.computer === "") {
		data.computer = 0;
	}
	if (data.otherLoads === "") {
		data.otherLoads = "Nil";
	}
	return data;
};
