export interface ButtonProps {
	type: "button" | "submit" | "reset";
	className: string;
	onClick?: () => void;
	text: string;
}

export interface ButtonPropsSvg {
	type: "button" | "submit" | "reset";
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	text: string;
	textTwo?: string | null;
	condition?: boolean;
}

export interface ModalProps {
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IFormProps {
	firstName: string;
	lastName: string;
	email: string;
	company: string;
	phone: string;
	address: string;
	bulb: string | number | undefined; 
	fan: string | number | undefined; 
	tv: string | number | undefined; 
	computer: string | number | undefined; 
	refrigerator: string | number | undefined; 
	freezer: string | number | undefined; 
	ac: string | number | undefined; 
	otherLoads: string | undefined;
}
