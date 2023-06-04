import React from "react";

const Chat = () => {
	return (
		<div className="fixed bottom-5 right-5">
			<div className="flex justify-end">
				<a
					href="https://api.whatsapp.com/send/?phone=2348038384141&text&type=phone_number&app_absent=0"
					target="_blank"
					className="bg-[#25D366] px-4 py-2 flex items-center text-white md:text-[24px] rounded-full relative"
					rel="noreferrer"
				>
					Start live chat!!
					<div className="md:w-[120px] ss:w-[80px] h-[30px] absolute top-2 left-9 border-2 border-green-800 rounded-full animate-ping"></div>
				</a>
			</div>
		</div>
	);
};

export default Chat;
