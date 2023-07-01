import React from "react";
import contactImg from "../../assets/contact-us.jpeg";
import { HiBuildingOffice } from "react-icons/hi2";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div className="">
			<img src={contactImg} alt="contact us image" />
			<div className="flex justify-center items-center flex-wrap py-8 bg-gradient-to-b from-[#000000] to-[#faa805] w-full h-auto">
				<div className="md:w-[150px] ss:w-full md:h-[450px] ss:h-[100px] bg-slate-700 md:order-1 ss:order-3">
					<div className="flex md:flex-col items-center justify-around h-full py-12">
						<Link
							to={
								"https://www.facebook.com/profile.php?id=100093271587783&mibextid=ZbWKwL"
							}
							target="_blank"
							className="text-[white] hover:text-blue-500 dark:hover:text-white"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="sr-only">Facebook page</span>
						</Link>
						<Link
							to={
								"https://instagram.com/mitakatradeafrica?igshid=MjAxZDBhZDhlNA=="
							}
							target="_blank"
							className="text-[white] hover:text-[#d62976] dark:hover:text-white"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="sr-only">Instagram page</span>
						</Link>
						<a
							href="#"
							className="text-[white] hover:text-blue-500 dark:hover:text-white"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
							</svg>
							<span className="sr-only">Twitter page</span>
						</a>
						<Link
							to={"https://www.linkedin.com/company/mitaka-trade-africa/"}
							target="_blank"
							className="text-[white] hover:text-blue-500 dark:hover:text-white"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M2.75 1.5a1.25 1.25 0 011.25-1.25h16.5a1.25 1.25 0 011.25 1.25v16.5a1.25 1.25 0 01-1.25 1.25h-16.5a1.25 1.25 0 01-1.25-1.25v-16.5zm6.016 18.56V9.126H5.828v10.934h2.938zm-1.469-12.5a1.859 1.859 0 11-.044-3.717 1.859 1.859 0 01.044 3.717zm12.5 12.5h-2.937v-5.59c0-1.401-.027-3.197-1.953-3.197-1.953 0-2.252 1.527-2.252 3.1v5.687h-2.937v-10.934h2.79v1.648h.04c.386-.733 1.328-1.503 2.753-1.503 2.94 0 3.47 1.931 3.47 4.443v6.346z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="sr-only">LinkedIn page</span>
						</Link>
					</div>
				</div>
				<div
					className="h-[600px] md:w-[400px] ss:w-[300px] bg-yellow-400 rounded-lg order-2"
					style={{ boxShadow: "4px 8px 45px red" }}
				>
					<p className="text-[40px] text-center font-medium border-b-2 border-slate-400">
						Get in Touch
					</p>
					<div className="flex flex-col justify-around h-[450px]">
						<div className="flex ss:px-0 md:px-8">
							<div className="mr-4">
								<HiBuildingOffice size={"3em"} />
							</div>
							<div>
								<p className="text-[24px] font-bold">Meet Us</p>
								<p className="font-medium">
									3B Oko Awo Street, Victoria Island Lagos, Nigeria
								</p>
							</div>
						</div>
						<div className="flex ss:px-0 md:px-8">
							<div className="mr-4">
								<BiPhoneCall size={"3em"} />
							</div>
							<div>
								<p className="text-[24px] font-bold">Call Us</p>
								<p className="font-medium">+234 803 838 4141</p>
								<p className="font-medium">+234 706 470 3021</p>
							</div>
						</div>
						<div className="flex ss:px-0 md:px-8">
							<div className="mr-4">
								<MdEmail size={"3em"} />
							</div>
							<div>
								<p className="text-[24px] font-bold">Email Us</p>
								<p className="font-medium">info@mitakatradeafrica.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className="md:order-3 ss:order-1">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.929306020495!2d3.4267632!3d6.4284244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52e299cdb4b%3A0x9319c0775afe320a!2sMitaka%20Africa!5e0!3m2!1sen!2sng!4v1686658972705!5m2!1sen!2sng"
						width="600"
						height="450"
						style={{ border: "0" }}
						allowFullScreen={false}
						loading="lazy"
						className="ss:w-[300px] sm:w-[370] md:w-[600px]"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
