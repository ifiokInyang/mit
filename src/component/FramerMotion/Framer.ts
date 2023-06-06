const typingContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.04,
		},
	},
};
const typingText = {
	hidden: { opacity: 0, y: "-20px" },
	show: {
		opacity: 1,
		y: "0",
		transition: {
			ease: "easeInOut",
		},
	},
};
const imgOne = {
	hidden: {
		opacity: 0,
		y: "400px",
		width: "80px",
	},
	show: {
		opacity: 1,
		y: 0,
		width: "250px",
		transition: {
			duration: 1,
			delay: 0.5,
			ease: "easeInOut",
		},
	},
};
const imgTwo = {
	hidden: {
		opacity: 0,
		y: "400px",
		x: "50px",
		width: "80px",
	},
	show: {
		opacity: 1,
		y: 0,
		x: 0,
		width: "250px",
		transition: {
			duration: 1,
			delay: 0.7,
			ease: "easeInOut",
		},
	},
};

export default {
	typingContainer,
	typingText,
	imgOne,
	imgTwo,
};
