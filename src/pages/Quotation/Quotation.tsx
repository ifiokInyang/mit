import React from "react";
import Announcement from "../../component/Announcement/Announcement";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Quote from "./Quote";

const Quotation = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<Quote />
			<Footer />
		</>
	);
};

export default Quotation;
