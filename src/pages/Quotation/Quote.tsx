import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../../component/Form/Form";

const Quote = () => {
	return (
		<div className="bg-gradient-to-b from-[#593e02] to-[#faa805] py-24 h-auto">
			<div className="flex flex-col items-center justify-evenly text-base w-full">
				<div className="lg:space-y-8 ss:space-y-2 md:w-[80vw] ss:w-[90vw]">
					<h1 className="md:text-[24px] ss:text-[12px] text-white font-bold lg:tracking-widest leading-loose">
						Didn't find what you were looking for on our{" "}
						<Link
							to="/chart"
							className="text-[red] underline hover:text-[blue]"
						>
							Power Chart?
						</Link>{" "}
						<br />
						Enter your load in the form and we will get back to you shortly.
					</h1>
				</div>
				<div
					className="my-8 rounded-2xl"
					style={{ boxShadow: "4px 8px 45px red" }}
				>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Quote;
