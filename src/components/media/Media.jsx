"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Media = ({ media }) => {

    const renderSlides = () => {
        return media.map((item, index) => (
            <SwiperSlide
                className="h-full w-full"
                key={index}
            >
                <Cards item={item} />
            </SwiperSlide>
        ));
    };



    return (
        <div className='mb-6'>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[15px] lg:text-[24px] font-bold text-[#FF7100]'>Media</h1>
                <div className='my-1 lg:my-2 w-[55px] lg:w-[100px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 106 2" fill="none">
                        <line y1="1" x2="63" y2="1" stroke="#FF7100" strokeWidth="2" />
                        <line x1="78" y1="1" x2="106" y2="1" stroke="#FF7100" strokeWidth="2" />
                    </svg>
                </div>
                <h1 className='text-[24px] lg:text-[40px]  font-semibold'>Our Video</h1>
            </div>

            <div className='hidden Cards lg:grid grid-cols-3 gap-7 px-4 max-w-7xl mx-auto w-full justify-items-center  py-10'>
                {
                    media.map((item, i) => (
                        <Cards item={item} key={i} />
                    ))
                }
            </div>



            <div className='Cards lg:hidden px-4 md:px-10 xl:px-20 w-full  py-10'>
                <Swiper
                    className="h-full"
                    spaceBetween={15}
                    slidesPerView={1.5}
                >
                    {renderSlides()}
                </Swiper>
            </div>

        </div>
    )
}


const Cards = ({ item: { title, details, image, videoUrl, } }) => (
    <div className="Card w-[100%] ">
        <div
            className='w-full aspect-[1/1] flex justify-center items-center'
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
        >
            {!videoUrl ? <div className='flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" className='flex justify-center items-center'>
                    <circle opacity="0.3" cx="50" cy="50" r="50" fill="white" />
                </svg>

                <div className='absolute  '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="32" fill="white" />
                    </svg>

                </div>

                <div className='absolute'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                        <g clipPath="url(#clip0_50_259)">
                            <path d="M13.8675 8.21521L1.8675 0.115235C1.75346 0.0384773 1.6247 -0.00123356 1.49395 2.92021e-05C1.3632 0.00129196 1.23499 0.0434846 1.122 0.122435C1.00872 0.201665 0.914751 0.315175 0.849473 0.451627C0.784195 0.588078 0.749895 0.742695 0.75 0.900033V17.1C0.749895 17.2573 0.784195 17.4119 0.849473 17.5484C0.914751 17.6848 1.00872 17.7984 1.122 17.8776C1.23687 17.9575 1.36723 17.9997 1.5 18C1.626 18 1.7535 17.9622 1.8675 17.8848L13.8675 9.78481C14.103 9.62461 14.25 9.32581 14.25 9.00001C14.25 8.67421 14.103 8.37541 13.8675 8.21521Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_50_259">
                                <rect width="15" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

            </div> : <iframe width="100%" height="100%" src={videoUrl} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}


            

        </div>
        <div className='mt-3'>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='text-lg text-[#7F7F7F]'>{details}</p>
        </div>
    </div>
)
export default Media
