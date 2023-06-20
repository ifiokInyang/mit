import React from "react";
import { Link } from "react-router-dom";
import { ModalProps } from "../../utils/interfaces";

export default function Modal({ showModal, setShowModal }: ModalProps) {
	return (
		<>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto ss:pt-[102px] fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-full my-6 ml-auto md:max-w-[400px] sm:max-w-[300px] ss:max-w-[250px]">
							{/* content */}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-r from-[#000000] to-[#faa805] outline-none focus:outline-none">
								{/* header */}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t hover:bg-[#b09f7f] hover:bg-[#b09f7f]">
									<Link to={"/"} onClick={() => setShowModal(false)}>
										<h3 className="text-3xl font-medium text-white hover:text-black">
											Home
										</h3>
									</Link>

									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-blue-900 opacity-1 h-16 w-16 text-[40px] block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								<div className="flex items-start justify-between p-5 py-8 border-b border-solid border-slate-200 rounded-t hover:bg-[#b09f7f]">
									<Link to={"/about"} onClick={() => setShowModal(false)}>
										<h3 className="text-3xl font-medium text-white hover:text-black">
											About
										</h3>
									</Link>
								</div>
								<div className="flex items-start justify-between p-5 py-8 border-b border-solid border-slate-200 rounded-t hover:bg-[#b09f7f]">
									<Link to={"/services"} onClick={() => setShowModal(false)}>
										<h3 className="text-3xl font-medium text-white hover:text-black">
											Services
										</h3>
									</Link>
								</div>
								<div className="flex items-start justify-between p-5 py-8 border-b border-solid border-slate-200 rounded-t hover:bg-[#b09f7f]">
									<Link to={"/projects"} onClick={() => setShowModal(false)}>
										<h3 className="text-3xl font-medium text-white hover:text-black">
											Projects
										</h3>
									</Link>
								</div>
								<div className="flex items-start justify-between p-5 py-8 rounded-t hover:bg-[#b09f7f]">
									<Link to={"/contact"} onClick={() => setShowModal(false)}>
										<h3 className="text-3xl font-medium text-white hover:text-black">
											Contact
										</h3>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
