import React from "react";
import { Link } from "react-router-dom";
import { ModalProps } from "../../utils/interfaces";

export default function HomeModal({ showModal, setShowModal }: ModalProps) {
	return (
		<>
			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div className="fixed inset-0 bg-black opacity-25"></div>
					<div className="relative w-full max-w-[400px] bg-gradient-to-r from-[#000000] to-[#faa805] rounded-lg">
						<div className="p-5 border-b border-slate-200 rounded-t hover:bg-[#b09f7f] flex justify-between items-center">
							<Link to={"/"} onClick={() => setShowModal(false)}>
								<h3 className="text-3xl font-medium text-white hover:text-black">
									Home
								</h3>
							</Link>
							<button
								className="p-1 bg-transparent border-0 text-black opacity-1 text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => setShowModal(false)}
							>
								<span className="bg-transparent text-blue-900 opacity-1 h-16 w-16 text-[40px] block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						<div className="p-5 border-b border-slate-200 hover:bg-[#b09f7f]">
							<Link to={"/about"} onClick={() => setShowModal(false)}>
								<h3 className="text-3xl font-medium text-white hover:text-black">
									About
								</h3>
							</Link>
						</div>
						<div className="p-5 border-b border-slate-200 hover:bg-[#b09f7f]">
							<Link to={"/products"} onClick={() => setShowModal(false)}>
								<h3 className="text-3xl font-medium text-white hover:text-black">
									Products
								</h3>
							</Link>
						</div>
						<div className="p-5 hover:bg-[#b09f7f]">
							<Link to={"/contact"} onClick={() => setShowModal(false)}>
								<h3 className="text-3xl font-medium text-white hover:text-black">
									Contact
								</h3>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
