import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../Button/ButtonSvg";

const Announcement = () => {
	const navigate = useNavigate();

	return (
    <div className="flex items-center flex-wrap px-4 py-4 bg-[#faa805]">
      <div className="flex flex-wrap flex-1 justify-center mt-2">
        <div className="inline-flex items-center font-bold px-8">
          {' '}
          <BsFillTelephoneFill />
          <p className="ml-2">+234 803 838 4141</p>
        </div>
        <div className="flex align-center font-bold items-center">
          <MdEmail />
          <p className="ml-2">info@mitakatradeafrica.com</p>
        </div>
      </div>
      <div className="flex-3">
        <Button
          type={'button'}
          text={
            'Explore your Battery and Inverter Requirements with Our Chart!'
          }
          onClick={() => navigate('/chart')}
        />
      </div>
    </div>
  );
};

export default Announcement;
