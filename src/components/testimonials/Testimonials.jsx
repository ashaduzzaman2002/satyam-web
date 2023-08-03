import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './testimonial.css'

const Testimonials = () => {
  const Data = [
    {
      id: "#01",
      name: "Jesiu Petit",
      type: "customer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet rutrum nisi. Sed ultrices dolor lorem, convallis porta sapien ultricies quis. Phasellus consectetur faucibus esLorem ipsum dolor sit amet, ",
      image: "/images/testiomonial-img-1.png",
    },
    {
      id: "#02",
      name: "Jesiu Petit",
      type: "customer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet rutrum nisi. Sed ultrices dolor lorem, convallis porta sapien ultricies quis. Phasellus consectetur faucibus esLorem ipsum dolor sit amet, ",
      image: "/images/testiomonial-img-2.png",
    },

    {
      id: "#01",
      name: "Jesiu Petit",
      type: "customer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet rutrum nisi. Sed ultrices dolor lorem, convallis porta sapien ultricies quis. Phasellus consectetur faucibus esLorem ipsum dolor sit amet, ",
      image: "/images/testiomonial-img-1.png",
    },
    {
      id: "#02",
      name: "Jesiu Petit",
      type: "customer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet rutrum nisi. Sed ultrices dolor lorem, convallis porta sapien ultricies quis. Phasellus consectetur faucibus esLorem ipsum dolor sit amet, ",
      image: "/images/testiomonial-img-2.png",
    },
  ];

 
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth > 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    // Update the slidesPerView initially and add a listener for window resize events
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);


  const renderSlides = () => {
    return Data.map((item, index) => (
      <SwiperSlide
        className="h-full w-full"
        key={index}
      >
        <Card Data={item} />
      </SwiperSlide>
    ));
  };

  return (
    <div
      className="text-[#fff] py-10 mb-6 lg:mb-20 grid pl-4 xl:pl-[2.5vw] grid-cols-2 justify-items-center items-center relative gap-5 testimonial-container"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), url(/assets/testimonial-bg.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col col-span-2 lg:col-span-1 justify-center lg:justify-start items-center lg:items-start py-6 lg:pt-16">
        <div className="absolute z-10 top-2 md:top-10 left-0 md:left-10 quote h-20 w-20 opacity-20">
          <img
            src={"/images/quote.svg"}
            height={100}
            width={100}
            alt="quote"
          />
        </div>
        <div>
          <p className="text-[#FF7100] text-lg">What People Say</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="106"
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
        <h1 className="text-3xl ">Client’s Talk</h1>
        <span className="px-4 lg:px-0 my-2 text-center lg:text-start">
          We have a wealth of experience working as main building contractors on
          all kinds of projects, big and small, from home maintenance and
          improvements to extensions, refurbishments and new builds.
        </span>

        {/* View More btn */}
        <div className="viewmore">
          <button
            className={`flex gap-2 text-white  py-2 items-center w-52 justify-center mt-8 bg-[#ff7100] rounded-[5px]`}
          >
            <span className="text-white text-lm font-semibold">View More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M18.025 11C18.0251 10.89 18.0035 10.781 17.9614 10.6794L17.8228 10.7368L17.9614 10.6794C17.9193 10.5777 17.8575 10.4854 17.7795 10.4077L10.9047 3.53286C10.5776 3.20553 10.0476 3.20585 9.72045 3.53279C9.39317 3.85987 9.39321 4.38988 9.72041 4.71708L16.0033 11L9.72045 17.2828C9.72044 17.2828 9.72043 17.2828 9.72041 17.2828C9.39312 17.6099 9.39345 18.1399 9.72038 18.4671C10.0475 18.7943 10.5775 18.7943 10.9047 18.4671L17.7795 11.5922C17.8575 11.5145 17.9193 11.4222 17.9614 11.3205L17.8228 11.2631L17.9614 11.3205C18.0035 11.2189 18.0251 11.11 18.025 11ZM18.025 11C18.025 11 18.025 11.0001 18.025 11.0001L17.875 11L18.025 10.9998C18.025 10.9999 18.025 10.9999 18.025 11ZM12.2797 10.4078L5.40467 3.53283C5.07747 3.20563 4.54745 3.20558 4.22038 3.53286C3.89344 3.86001 3.89312 4.39 4.22045 4.71712L10.5033 11L4.22041 17.2828C3.89321 17.61 3.89317 18.14 4.22045 18.4671C4.54759 18.794 5.07755 18.7944 5.40467 18.4671C5.40468 18.4671 5.40469 18.4671 5.40471 18.4671L12.2797 11.5921C12.4431 11.4286 12.525 11.214 12.525 11C12.525 10.7859 12.4431 10.5713 12.2797 10.4078Z"
                fill="white"
                stroke="white"
                strokeWidth="0.3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="col-span-2 lg:col-span-1 w-full">
        <div
          className="Cards text-[#000] w-full pr-4 md:pr-10 lg:pr-0"
        >
          <Swiper
            className="h-full w-full"
            onSwiper={setSwiper}
            spaceBetween={25}
            slidesPerView={slidesPerView}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 1000 }}
          >
            {renderSlides()}
          </Swiper>
        </div>

        {/* Arrow */}
        <div className="Arrow flex gap-4 justify-center lg:justify-start items-center  py-4">
          <div
            className={`w-10 h-10 lg:w-12 lg:h-12 rounded-[5px] lg:rounded-none flex items-center justify-center bg-white`}
            onClick={handlePrev}
          >
            <svg
            className='w-5 h-5 lg:w-8 lg:h-8'
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M1.61625 15.8835L10.3663 24.6335C10.602 24.8612 10.9178 24.9872 11.2455 24.9843C11.5732 24.9815 11.8868 24.85 12.1185 24.6183C12.3503 24.3865 12.4817 24.073 12.4846 23.7452C12.4874 23.4175 12.3614 23.1017 12.1337 22.866L5.5175 16.2497H27.5C27.8315 16.2497 28.1495 16.118 28.3839 15.8836C28.6183 15.6492 28.75 15.3313 28.75 14.9997C28.75 14.6682 28.6183 14.3503 28.3839 14.1159C28.1495 13.8814 27.8315 13.7497 27.5 13.7497H5.5175L12.1337 7.13348C12.2531 7.01818 12.3484 6.88024 12.4139 6.72774C12.4794 6.57523 12.5139 6.41121 12.5153 6.24523C12.5168 6.07926 12.4851 5.91466 12.4223 5.76104C12.3594 5.60742 12.2666 5.46786 12.1492 5.35049C12.0319 5.23312 11.8923 5.14031 11.7387 5.07746C11.5851 5.0146 11.4205 4.98298 11.2545 4.98442C11.0885 4.98586 10.9245 5.02035 10.772 5.08586C10.6195 5.15137 10.4816 5.2466 10.3663 5.36598L1.61625 14.116C1.38191 14.3504 1.25027 14.6683 1.25027 14.9997C1.25027 15.3312 1.38191 15.6491 1.61625 15.8835Z"
                fill="#FF7100"
              />
            </svg>
          </div>

          <div
            className={`w-10 h-10 lg:w-12 lg:h-12 rounded-[5px] lg:rounded-none flex items-center justify-center bg-[#ff7100]`}
            onClick={handleNext}
          >
            <svg
            className='w-5 h-5 lg:w-8 lg:h-8'
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M28.3838 14.1165L19.6337 5.36652C19.398 5.13882 19.0822 5.01282 18.7545 5.01567C18.4268 5.01852 18.1132 5.14998 17.8815 5.38174C17.6497 5.6135 17.5183 5.92702 17.5154 6.25476C17.5126 6.58251 17.6386 6.89826 17.8663 7.13401L24.4825 13.7503H2.5C2.16848 13.7503 1.85054 13.882 1.61612 14.1164C1.3817 14.3508 1.25 14.6687 1.25 15.0003C1.25 15.3318 1.3817 15.6497 1.61612 15.8841C1.85054 16.1186 2.16848 16.2503 2.5 16.2503H24.4825L17.8663 22.8665C17.7469 22.9818 17.6516 23.1198 17.5861 23.2723C17.5206 23.4248 17.4861 23.5888 17.4847 23.7548C17.4832 23.9207 17.5149 24.0853 17.5777 24.239C17.6406 24.3926 17.7334 24.5321 17.8508 24.6495C17.9681 24.7669 18.1077 24.8597 18.2613 24.9225C18.4149 24.9854 18.5795 25.017 18.7455 25.0156C18.9115 25.0141 19.0755 24.9797 19.228 24.9141C19.3805 24.8486 19.5184 24.7534 19.6337 24.634L28.3838 15.884C28.6181 15.6496 28.7497 15.3317 28.7497 15.0003C28.7497 14.6688 28.6181 14.3509 28.3838 14.1165Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ Data }) => (
  <div className="Card bg-[#FFFFFF] p-2 rounded-md">
    <div className="top pb-4">{Data.message}</div>
    <hr className="pb-4" />
    <div className="button flex  justify-between items-end">
      <div className="left flex justify-center   items-center gap-2">
        <div>
          <img
            src={Data.image}
            height={50}
            width={50}
            loading="lazy"
            alt="testimonial "
          />
        </div>
        <div>
          <p>{Data.name}</p>
          <p>{Data.type}</p>
        </div>
      </div>
      <div className="right">#01</div>
    </div>
  </div>
);

export default Testimonials;
