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

export default {
	typingContainer,
	typingText,
};
