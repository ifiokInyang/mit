import { number, object, string } from "yup";

export const validationSchema = object().shape({
	firstName: string()
		.required("firstName is required")
		.min(3, "firstName must be at least 3 characters"),
	lastName: string()
		.required("lastName is required")
		.min(3, "lastName must be at least 3 characters"),
	email: string().required("Email is required").email("Invalid email address"),
	company: string().required("Company is required"),
	phone: string()
		.required("phone number is required")
		.min(7, "phone number must be at least 7 characters"),
	address: string().required("address is required"),
	bulb: string(),
	fan: string(),
	tv: string(),
	computer: string(),
	refrigerator: string(),
	freezer: string(),
	ac: string(),
	otherLoads: string(),
});
