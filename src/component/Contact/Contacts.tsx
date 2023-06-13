import React from "react";
import Announcement from "../../component/Announcement/Announcement";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../Footer/Footer";
import Contact from "./Contact";

const Contacts = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<Contact />
			<Footer />
		</>
	);
};

export default Contacts;
