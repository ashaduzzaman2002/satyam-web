import React from "react";
import Style from "./about.module.css";


const About = () => {
  return (
    <div
      className={`px-4 md:px-10 xl:px-20 my-6 lg:my-20 grid grid-cols-5 gap-4 lg:gap-8 xl:gap-12 ${Style.aboutContainer}`}
    >
      <div className="w-full col-span-5 lg:col-span-2 h-full flex justify-start">
          <img className={`rounded-xl ${Style.img} hidden lg:block `} src="/images/aboutImage1.svg" alt="image" />
          <img className={`rounded-xl lg:hidden ${Style.img}`} src="/images/aboutImage2.svg" alt="image" />
      </div>

      <div className="w-full col-span-5 lg:col-span-3 flex flex-col justify-center">
        <div className="">
          <h1 className="text-[15px] lg:text-[20px] font-bold text-[#FF7100]">
            About Us
          </h1>
          <div className="my-0 w-[55px] lg:w-[100px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="2"
              viewBox="0 0 106 2"
              fill="none"
            >
              <line y1="1" x2="63" y2="1" stroke="#FF7100" strokeWidth="2" />
              <line
                x1="78"
                y1="1"
                x2="106"
                y2="1"
                stroke="#FF7100"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-[24px] lg:text-[40px] font-semibold">Company Profile</h2>

        <div className=" w-max-[766px] mt-2 lg:mt-4">
          <p className="text-[#7F7F7F] text[13px] lg:text-[17px] font-medium mt-3">Satyam Developers actively seeks growth by investing in a variety of systematically identified businesses, making it a well-diversified conglomerate with interest in a range of projects such as Residential, Premium Condominiums, Commercial Complexes, Integrated Modern Townships and Malls.</p>
          <p className="text-[#7F7F7F] text[13px] lg:text-[17px] font-medium mt-3">Over the past 20 years, the company has been acknowledged for quality, commit ments, integrity & timely execution, innovative technology upgradation and value addition all through for all projects.</p>
          <p className="text-[#7F7F7F] text[13px] lg:text-[17px] font-medium mt-3">Within a short span of time the company has successfully carved its niche in the market with a number of reputed residential and commercial complexes to its credit. Our buildings mark a perfect merger of aesthetic design and quality construction.</p>
        </div>


      </div>
    </div>
  );
};

export default About;
