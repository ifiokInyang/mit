import React, { useState } from "react";
import { ModalProps } from "../../utils/interfaces";
import homeImg from "../../assets/home-img.png";
import { apiPost } from "../../utils/api/axios";

export default function HomeModal({ showModal, setShowModal }: ModalProps) {
	const [name, setName] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (phone.length < 8) {
			return setError("phone number must not be less than 8 digits");
		} else {
			setShowModal(false);
		}
		const data = {
			fName: name,
			phone,
			email,
		};
		try {
			await apiPost("/api/users/add-user", data);
		} catch (error) {
			console.log("Something went wrong..");
		}
	};
	const handleImageLoad = () => {
		setIsLoading(false);
	};
	return (
		<>
			{showModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-40">
					<div className="bg-white md:w-[50%] ss:w-[80%] rounded-lg relative">
						<div className="relative w-full h-auto">
							{isLoading && (
								<div className="flex items-center justify-center w-full h-[380px] bg-gray-100">
									<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-500"></div>
								</div>
							)}
							<img
								src={homeImg}
								alt="mitaka battery with warranty and discount"
								className={`w-full ss:h-auto lg:h-[380px] object-cover rounded-t-md bg-[#d4af37] ${
									isLoading ? "hidden" : ""
								}`}
								onLoad={handleImageLoad}
							/>
							<div className="absolute md:top-2 ss:top-0 left-0 bg-[black] mt-1 ss:mx-2 md:mx-0 lg:mx-8 text-white py-2 px-2 rounded-full ss:text-sm md:text-[28px] font-medium">
								20% OFF
							</div>
						</div>

						<button
							className="absolute top-0 right-0 bg-transparent border-0 text-black opacity-1 text-3xl leading-none font-semibold outline-none focus:outline-none"
							onClick={() => setShowModal(false)}
						>
							<span className="bg-transparent text-blue-900 opacity-1 h-16 w-16 text-[40px] block outline-none focus:outline-none">
								×
							</span>
						</button>
						<p className="px-4 text-red-800 font-bold md:text-[20px] ss:text-[16px] md:tracking-wider ss:tracking-normal">
							Be the first to know of our best deals and offers!!!
						</p>
						<form className="p-4" onSubmit={handleSubmit}>
							<div className="grid md:grid-cols-2 md:gap-6">
								<div className="relative z-0 w-full mb-6 group">
									<input
										type="text"
										name="floating_first_name"
										value={name}
										id="floating_first_name"
										className="block py-2.5 px-0 w-full text-[14px] font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										onChange={(e) => setName(e.target.value)}
										required
									/>
									<label
										htmlFor="floating_first_name"
										className="peer-focus:font-medium font-bold absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										First name
									</label>
								</div>
								<div className="relative z-0 w-full mb-6 group">
									<input
										type="number"
										// pattern="[+]{1}[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
										name="floating_phone"
										id="floating_phone"
										className="block py-2.5 px-0 w-full text-[14px] font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										value={phone}
										onChange={(e) => {
											setError("");
											setPhone(e.target.value);
										}}
										required
									/>
									<label
										htmlFor="floating_phone"
										className="peer-focus:font-medium font-bold absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										Phone
									</label>
									{error.length > 0 && (
										<div className="text-red-500 md:text-[14px] ss:text-[10px]">
											{error}
										</div>
									)}
								</div>
							</div>
							<div className="relative z-0 w-full mb-6 group">
								<input
									type="email"
									name="floating_email"
									id="floating_email"
									className="block py-2.5 px-0 w-full text-[14px] font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<label
									htmlFor="floating_email"
									className="peer-focus:font-medium font-bold absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Email
								</label>
							</div>
							<button
								type="submit"
								className="text-white bg-gradient-to-r from-[#52462d] to-blue-900 hover:to-[#f2bf4b] hover:from-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Join Now
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
