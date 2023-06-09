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
