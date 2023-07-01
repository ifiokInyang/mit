import React from "react";
import batteryProduct from "../../assets/battery-product.png";
import batteryProduct2 from "../../assets/mitaka-prd1.png";
import batteryProduct3 from "../../assets/mitaka-prd2.png";
import batteryProduct4 from "../../assets/mitaka-prd3.png";

const Products = () => {
	return (
		<>
			<div className="ss:text-[16px] lg:text-[26px] md:text-[30px] mt-[50px] bg-[#f5f4f0]">
				<div className="flex justify-center items-center bg-red-400">
					<img
						src={batteryProduct}
						alt="mitaka-batteries"
						className="w-full h-full"
					/>
				</div>
				<div className="md:p-8 ss:p-1">
					<h1 className="text-[28px] font-bold pb-8">Our Battery Technology</h1>
					<p className="text-[20px] ss:font-normal md:font-medium lg:leading-loose ss:leading-snug tracking-wider">
						Mitaka batteries have a patented Nano Carbon Silica blend that
						protects the internal cells from 'sulfation'. Due to this our
						batteries do not lose their effectiveness over time in the same way
						normal batteries do. This leads to an ultra long battery life of 20+
						years, and we back our batteries with a 10 year warranty.
					</p>
					<div className="mt-8">
						<h1 className="my-8 text-[28px] font-bold">
							Mitaka Batteries VS Lithium-Ion batteries
						</h1>
						<div className="flex flex-wrap">
							<div className="flex-1"></div>
							<h3 className="flex-1 font-medium">Mitaka Battery Technology</h3>
							<h3 className="flex-1 font-medium">
								Lithium-Ion Battery Technology
							</h3>
						</div>
						<div className="flex flex-wrap min-h-[130px]">
							<h3 className="font-bold flex-1 bg-[#f0f3f7] pl-2">Price</h3>
							<h3 className="flex-1 bg-[#f5e9eb] pl-2">
								Low cost Lead-Acid battery structure
							</h3>
							<h3 className="flex-1 bg-[#f0f3f7] pl-2">
								Complicated structure and expensive materials. 3-5 times the
								cost of Lead-Acid batteries.
							</h3>
						</div>
						<div className="flex flex-wrap min-h-[130px]">
							<h3 className="font-bold flex-1 bg-[#f5e9eb] pl-2">Weight</h3>
							<h3 className="flex-1 bg-[#f0f3f7]  pl-2">
								Large and heavy: Suitable for fixed stationary use
							</h3>
							<h3 className="flex-1 bg-[#f5e9eb]  pl-2">
								Small and light weight: Suitable for portable devices
							</h3>
						</div>
						<div className="flex flex-wrap min-h-[130px]">
							<h3 className="font-bold flex-1 bg-[#f0f7f0] pl-2">Stability</h3>
							<h3 className="flex-1 bg-[#f3e9f5] pl-2">
								Stable at a wide range of temperatures and conditions
							</h3>
							<h3 className="flex-1 bg-[#f0f7f0] pl-2">
								Unstable, and may have a risk of igniting
							</h3>
						</div>
						<div className="flex flex-wrap min-h-[130px]">
							<h3 className="font-bold ss:flex md:hidden flex-1 w-[33.3%] bg-[#f3e9f5]  pl-2">
								Ancillary <br /> Equipment
							</h3>
							<h3 className="font-bold ss:hidden md:flex flex-1 bg-[#f3e9f5]  pl-2">
								Ancillary Equipment
							</h3>
							<h3 className="flex-1 bg-[#f0f7f0] w-[33.3%] ss:pl-1 sm:pl-2">
								No special maintenance required
							</h3>
							<h3 className="flex-1 bg-[#f3e9f5] w-[33.3%] ss:pl-1 sm:pl-2">
								Requires battery management system
							</h3>
						</div>
						<div className="flex flex-wrap min-h-[130px]">
							<h3 className="flex-1 bg-[#f0f3f7] font-bold w-[33.3%]  pl-2">
								{" "}
								Charges & Discharges
							</h3>
							<h3 className="flex-1 bg-[#fffffc] w-[33.3%]  pl-2">
								2,000 Charges per Discharges
							</h3>
							<h3 className="flex-1 bg-[#f0f3f7] w-[33.3%]  pl-2">
								1,200 - 2,000 Charges per Discharges
							</h3>
						</div>
						<div className="flex flex-wrap min-h-[130px]">
							<h3 className="flex-1 bg-[#fffffc] ss:flex sm:hidden font-bold  pl-2">
								{" "}
								Environ-
								<br />
								mental <br />
								Impact
							</h3>
							<h3 className="flex-1 bg-[#fffffc] ss:hidden sm:flex font-bold  pl-2">
								{" "}
								Environmental Impact
							</h3>
							<h3 className="flex-1 bg-[#f0f3f7]  pl-2">
								Made of Lead and Sulfuric Acid (98% Recyclable)
							</h3>
							<h3 className="flex-1 bg-[#fffffc] pl-2">
								Contains radioactive substances (Lithium Copper Oxide)
							</h3>
						</div>
					</div>
					<div className="mb-8">
						<h1 className="text-[28px] font-bold py-8">
							Our Ultra Long-Life Battery Models
						</h1>
						<h1>
							Our batteries are available in{" "}
							<strong> 120AH, 150AH and 200AH</strong> and can last up to 10
							hours when fully charged without voltage loss.
						</h1>
						<div className="space-y-8 mt-8">
							<h1>● 12v/120AH - 45kg </h1>
							<h1>● 12v/150AH - 50kg</h1>
							<h1>● 12v/200AH - 59.5kg</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Products;
