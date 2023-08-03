import React from "react";

const VisionAndMission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between mx-auto gap-4 px-4 md:px-10 xl:px-20 mb-6 lg:mb-20 w-screen grid-flow-row order-last">
      <div className="flex justify-end items-center md:order-last">
        <img
          loading="lazy"
          className=""
          src={"/images/ov-om.png"}
          height={600}
          width={500}
          alt="ov-om image"
        />
      </div>
      <div>
        <div className="my-6">
          <h1 className="text-[24px] lg:text-[40px] font-semibold mb-2 lg:mb-5">
            Our Vision
          </h1>
          <span className="text-[13px] lg:text-[17px] text-[#7F7F7F] font-medium">
            The Company's vision is to evolve global lifestyles suited to
            contemporary needs and cater to people from all walks of life with
            the finest habitats. We have risen on the real estate scenario to
            build on dreams, both commercial and residential.
          </span>
        </div>
        <div className="my-6">
          <h1 className="text-[24px] lg:text-[40px] font-semibold mb-2 lg:mb-5">
            Our Mission
          </h1>
          <span className="text-[13px] lg:text-[17px] text-[#7F7F7F] font-medium">
            With the real state scenario in India undergoing a metamorphosis,
            lifestyles are evolving like never before and people are looking for
            contemporary living spaces with an ancient on greenery & clean
            Environment. The company's mission is to fulfill the same need and
            reach out to the masses with projects that blend affordability with
            elegance and style.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VisionAndMission;
