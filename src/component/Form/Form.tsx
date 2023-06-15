import React, { useState } from "react";
import Button from "../Button/ButtonSvg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../utils/Validation/Validator";
import { apiPost } from "../../utils/api/axios";

function Form() {
	const [apiResponse, setApiresponse] = useState<string>("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	// Form submission handler
	const onSubmit = async (data: any) => {
		if (data.bulb === "") {
			data.bulb = 0;
		}
		if (data.fan === "") {
			data.fan = 0;
		}
		if (data.ac === "") {
			data.ac = 0;
		}
		if (data.freezer === "") {
			data.freezer = 0;
		}
		if (data.refrigerator === "") {
			data.refrigerator = 0;
		}
		if (data.tv === "") {
			data.tv = 0;
		}
		if (data.computer === "") {
			data.computer = 0;
		}
		if (data.otherLoads === "") {
			data.otherLoads = "Nil";
		}

		const response = await apiPost("/api/loads/get-load", data);
		setApiresponse(response.data?.message);
	};

	return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[80vw] ss:w-[90vw] p-8"
      >
        {apiResponse !== '' && (
          <p className="text-[18px] bg-white mb-4 p-4 text-[#FF5733] font-medium w-full">
            {apiResponse}
          </p>
        )}
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div className="">
            <label
              htmlFor="email"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              Email address
              <span className="text-red-500 pl-1 font-bold text-[18px] pl-1 font-bold text-[18px]">
                *
              </span>
            </label>
            <input
              type="email"
              {...register('email')}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
            />
            {errors.email !== undefined && (
              <p className="text-[16px] italic text-white">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              First name
              <span className="text-red-500 pl-1 font-bold text-[18px]">*</span>
            </label>
            <input
              type="text"
              {...register('firstName')}
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
            />
            {errors.firstName !== undefined && (
              <p className="text-[16px] italic text-white">
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              Last name
              <span className="text-red-500 pl-1 font-bold text-[18px]">*</span>
            </label>
            <input
              type="text"
              {...register('lastName')}
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
            />
            {errors.lastName !== undefined && (
              <p className="text-[16px] italic text-white">
                {errors.lastName?.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              Company
              <span className="text-red-500 pl-1 font-bold text-[18px]">*</span>
            </label>
            <input
              type="text"
              {...register('company')}
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your company name..."
            />
            {errors.company !== undefined && (
              <p className="text-[16px] italic text-white">
                {errors.company?.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              Phone number
              <span className="text-red-500 pl-1 font-bold text-[18px]">*</span>
            </label>
            <input
              type="tel"
              {...register('phone')}
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
            />
            {errors.phone !== undefined && (
              <p className="texttext-[16px] italic text-white">
                {errors.phone?.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              Address
              <span className="text-red-500 pl-1 font-bold text-[18px]">*</span>
            </label>
            <input
              type="text"
              {...register('address')}
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your address..."
            />
            {errors.address !== undefined && (
              <p className="text-[16px] italic text-white">
                {errors.address?.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-4">
          <div>
            <label
              htmlFor="bulbs"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              No. of bulbs?
            </label>
            <input
              type="number"
              {...register('bulb')}
              id="bulb"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              min={0}
            />
          </div>
          <div>
            <label
              htmlFor="fans"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              No. of fans?
            </label>
            <input
              type="number"
              {...register('fan')}
              id="fan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              min={0}
            />
          </div>
          <div>
            <label
              htmlFor="tvs"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              No. of TVs?
            </label>
            <input
              type="number"
              {...register('tv')}
              id="tv"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              min={0}
            />
          </div>
          <div>
            <label
              htmlFor="tvs"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              No. of Computers?
            </label>
            <input
              type="number"
              {...register('computer')}
              id="computer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              min={0}
            />
          </div>
          <div>
            <label
              htmlFor="refrigerators"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              No. of refrigerators?
            </label>
            <input
              type="number"
              {...register('refrigerator')}
              id="refrigerator"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              min={0}
            />
          </div>
          <div>
            <label
              htmlFor="freezers"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              No. of Freezers?
            </label>
            <input
              type="number"
              {...register('freezer')}
              id="freezers"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              min={0}
            />
          </div>
          <div>
            <label
              htmlFor="a/c"
              className="block mb-2 text-[18px] font-medium text-white dark:text-white"
            >
              No. of A/Cs?
            </label>
            <input
              type="number"
              {...register('ac')}
              id="ac"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              min={0}
            />
          </div>
        </div>

        <label
          htmlFor="message"
          className="block mb-2 text-[18px] font-medium text-white dark:text-white"
        >
          Fill in other loads (not listed above) that you want your inverter to
          power.
        </label>
        <textarea
          id="message"
          {...register('otherLoads')}
          rows={4}
          className="block p-2.5 w-full text-[18px] mb-8 font-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Example: Sewing Machine - 2; Electric blender: 2..."
        ></textarea>

        <Button type={'submit'} text={'Submit'} />
        {apiResponse !== '' && (
          <p className="text-[18px] bg-white text-[#FF5733] p-4 mt-8 font-medium w-full">
            {apiResponse}
          </p>
        )}
      </form>
    </>
  );
}

export default Form;
