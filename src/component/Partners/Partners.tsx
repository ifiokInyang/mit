import React from "react";
import partnerOne from "../../assets/partner-australis.png";
import partnerTwo from "../../assets/partner-hitachi.png";
import partnerThree from "../../assets/partner-hyundai.svg";
import partnerFour from "../../assets/partner-kyb.png";
import partnerFive from "../../assets/partner-kyuokuto.png";

const Partners = () => {
	return (
        <>
            <div>
                <h1>We partner with top brands to meet their energy needs</h1>
            </div>
      <div className="flex">
        <img src={partnerOne} alt="australis-company-logo" />
        <img src={partnerTwo} alt="hitachi-company-logo" />
        <img src={partnerThree} alt="hyundai-company-logo" />
        <img src={partnerFour} alt="kyb-company-logo" />
        <img src={partnerFive} alt="kyuokuto-company-logo" />
      </div>
    </>
  );
};

export default Partners;
