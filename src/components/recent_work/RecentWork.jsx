"use client"
import React, { useState } from 'react'
import Style from './recentWork.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// SwiperCore.use([Navigation]);


const RecentWork = () => {

  const Data = [
    {
      title: "Satyam skyline",
      image: '/images/recent-work-1.png',
    },
    {
      title: "Sarjan",
      image: '/images/recent-work-2.png',
    },

    {
      title: "Sarjan",
      image: '/images/city.png',
    },

    {
      title: "Satyam 64",
      image: '/images/recent-work-3.png',
    },
    {
      title: "Sentossa Greenland",
      image: '/images/recent-work-4.png',
    },
    {
      title: "Sentossa Neemland",
      image: '/images/recent-work-5.png',
    },
    {
      title: "Sarjan",
      image: '/images/recent-work-6.png',
    },
  ]

  const renderSlides = () => {
    return Data.map((item, index) => (
      <SwiperSlide
        className="h-full w-full"
        key={index}
      >
        <Cards item={item} />
      </SwiperSlide>
    ));
  };

  const [swiper, setSwiper] = useState(null);

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

  return (
    <div
      className="recent_work_container flex flex-col justify-center items-center mb-6 lg:mb-20 px-4 max-w-7xl mx-auto "
    >

      <div className='flex flex-col justify-center items-center'>
        <span className='text-[#FF7100] text-[15px] lg:text-[24px] font-bold'>Portfolio</span>
        <div className="flex gap-4 justify-center md:justify-start my-1 lg:my-2">
          <svg
            width="81"
            height="2"
            viewBox="0 0 81 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="81" y2="1" stroke="#FF7100" strokeWidth="2" />
          </svg>

          <svg
            width="30"
            height="2"
            viewBox="0 0 30 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="30" y2="1" stroke="#FF7100" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <span className='text-[24px] lg:text-[40px] font-bold mb-6'>Our Recent Work</span>

      {/* Desktop view */}
      <div className='hidden lg:grid grid-cols-3 place-content-center gap-6 my-8  w-full '>
        {/* {
          Data.map((item, i) => (
            <Cards key={i} item={item} />
          ))
        } */}

        <div className=' grid-rows-2 gap-6'>
          <div className='h-[395px] rounded-xl overflow-hidden'>
            <img className='w-full h-full' src={Data[0].image} alt="" />
          </div>
          <div className='row-span-1 mt-6 h-[395px] rounded-xl overflow-hidden'>
          <img className='w-full h-full' src={Data[1].image} alt="" />
          </div>
        </div>

        <div className='grid-rows-3 gap-6'>
          <div className='row-span-1 h-[212px] rounded-xl overflow-hidden'>
          <img className='w-full h-full object-cover' src={Data[2].image} alt="" />
          </div>
          <div className=' row-span-1 h-[365px] rounded-xl mt-3 overflow-hidden'>
          <img className='w-full h-full object-cover' src={Data[3].image} alt="" />
          </div>
          <div className='bg-red-500 row-span-1 h-[212px] rounded-xl mt-3 overflow-hidden'>
          <img className='w-full h-full object-cover' src={Data[4].image} alt="" />
          </div>
        </div>

        <div className=' grid-rows-2 gap-6'>
          <div className='h-[395px] rounded-xl bg-slate-600 overflow-hidden'>
            <img className='w-full h-full object-cover' src={Data[6].image} alt="" />
          </div>
          <div className='row-span-1 mt-6 h-[395px] rounded-xl overflow-hidden'>
          <img className='w-full h-full' src={Data[5].image} alt="" />
          </div>
        </div>

      </div>

      {/* Mobile view */}
      <div className='lg:hidden place-content-center w-full my-5 '>
        <Swiper
          className="h-full"
          spaceBetween={15}
          slidesPerView={1.5}
          onSwiper={setSwiper}
        >
          {renderSlides()}
        </Swiper>

        {/* Arrow */}


        <div className=' mt-5 justify-center flex gap-4'>
          <div
            className={` w-8 h-8 rounded-[5px]  flex items-center justify-center`}
            style={{ border: '2px solid #FF7100' }}
            onClick={handlePrev}
          >
            <svg
              className='w-5 h-5'
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
            className={`w-8 h-8 rounded-[5px] flex items-center justify-center`}
            style={{ backgroundColor: '#FF7100' }}
            onClick={handleNext}
          >
            <svg
              className='w-5 h-5'
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
  )
}


const Cards = ({ item: { image, title } }) => (
  <div
    className={`bg-center bg-cover bg-no-repeat aspect-square w-full bg-gradient-to-t from-slate-900 to-slate-200  flex  gap-4 rounded-[0.3rem] `}
    style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.08%, rgba(0, 0, 0, 0.81) 100%), url(${image})`, }}

  >
    <div className="text_block flex flex-col w-full h-full justify-end ml-3 pb-4 text-2xl">
      <div className="title text-slate-50">{title}</div>
      <div className="read_more text-xl flex gap-4 items-center">
        <h2 className='text-[#FF7100]'>Read More</h2>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_16_8163)">
            <path d="M19.7709 9.44699L19.7702 9.44625L15.688 5.38375C15.3822 5.07941 14.8875 5.08054 14.5831 5.3864C14.2787 5.69222 14.2799 6.18687 14.5857 6.49125L17.3265 9.21875H0.78125C0.349766 9.21875 0 9.56851 0 10C0 10.4315 0.349766 10.7812 0.78125 10.7812H17.3265L14.5857 13.5087C14.2799 13.8131 14.2788 14.3078 14.5831 14.6136C14.8875 14.9195 15.3822 14.9205 15.688 14.6162L19.7702 10.5537L19.7709 10.553C20.0769 10.2476 20.0759 9.75136 19.7709 9.44699Z" fill="#FF7100" />
          </g>
          <defs>
            <clipPath id="clip0_16_8163">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </div>
    </div>
  </div>
)

export default RecentWork
