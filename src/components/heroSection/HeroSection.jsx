import React from 'react'
import './hero.css'

const HeroSection = ({ title }) => {
    const slideStyle = {
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(/images/office.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div style={slideStyle} className='relative pt-[130px] h-[60vh]'>

            <div className='px-4 max-w-7xl mx-auto flex lg:flex-row flex-col justify-between gap-5 items-center h-full'>

                <div className='w-full max-w-[95%] md:max-w-[70%] max-h-full hero-card'>
                    <h2 className="text-[24px] md:text-10 lg:text-[50px] font-semibold lg:leading-[70px] capitalize text-white">{title}</h2>
                    <div className="flex gap-4 ">
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

                <div className='w-full'>
                    <img className=' w-[160px] h-[160px] lg:w-[300px] lg:h-[300px] rounded-full ms-auto' src="/images/civil.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default HeroSection