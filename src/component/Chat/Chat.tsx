import React from "react";
import "./Chat.css";

const Chat = () => {
	return (
		<div className="fixed bottom-5 left-3 md:z-50">
			<div className="flex justify-end">
				<a
					href="https://api.whatsapp.com/send/?phone=2348038384141&text&type=phone_number&app_absent=0"
					target="_blank"
					// className="bg-[#25D366] px-4 py-2 flex items-center text-white md:text-[24px] rounded-full relative"
					rel="noreferrer"
				>
					<div className="white">
						<div className="socialContainer">
							<i className="fas fa-phone"></i>
						</div>
					</div>
					{/* Start live chat!! */}
					<div className="md:w-[60px] ss:w-[50px] md:h-[60px] ss:h-[50px] absolute md:top-2 ss:top-4 left-4 border-2 border-green-800 rounded-full animate-ping"></div>
				</a>
			</div>
		</div>
	);
};

export default Chat;
