import React from "react";
import Announcement from "../../component/Announcement/Announcement";
import Footer from "../../component/Footer/Footer";
import Modal from "../../component/Modal/Modal";
import Navbar from "../../component/Navbar/Navbar";
import ChartTable from "./ChartTable";

const Chart = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<Modal />
			<ChartTable />
			<Footer />
		</>
	);
};

export default Chart;
