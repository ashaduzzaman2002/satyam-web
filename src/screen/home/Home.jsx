import React from 'react'
import Layout from '../../layout/Layout'
import {Slider} from '../../components'

const Home = () => {
    const slides = [
        {
          bg: "/images/home-banner.png",
          subHeading: "Let's construct a",
          heading1: "better tomorrow for ",
          heading2: "future generations",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet rutrum nisi. Sed ultrices dolor lore",
        },
    
        {
          bg: "/images/home-banner.png",
          subHeading: "Let's construct a",
          heading1: "better tomorrow for ",
          heading2: "future generations",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet rutrum nisi. Sed ultrices dolor lore",
        },
    
        {
          bg: "/images/home-banner.png",
          subHeading: "Let's construct a",
          heading1: "better tomorrow for ",
          heading2: "future generations",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet rutrum nisi. Sed ultrices dolor lore",
        },
      ];
    
      const media = [
        {
          title: "Innovation",
          details:
            "Leveraging the latest development in real estate. solaris’ projects are the pinnacle of design and innovation.",
          image: "/assets/our-media-1.jpg",
        },
        {
          title: "Quality",
          details:
            "With an unrelenting focus on socurcing only the finest quality materials. solaris’ spaces are desig....",
          image: "/assets/our-media-2.jpg",
        },
        {
          title: "Trust",
          details:
            "With cumulative experience of over 41 years in the field, the promoters have garnered the trust of cus.....",
          image: "/assets/our-media-3.jpg",
        },
      ];

  return (
    <Layout title={'Satyam'}>
        <main className="">
      <div className='hero'>
        <Slider slides={slides} />
      </div>
      {/* <About /> */}
      {/* <div className="mb-6 lg:mb-20">
        <Media media={media} />
        <div className="viewmore -mt-8">
          <button
            className={`flex gap-2 text-white  py-2 items-center w-52 justify-center mx-auto bg-[#ff7100] rounded-[5px]`}
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
      </div> */}

      {/* <Testimonials />
      <RecentWork />
      <Contact /> */}
    </main>
    </Layout>
  )
}

export default Home