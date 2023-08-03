import React from 'react'
import { Contact, HeroSection, Media, Testimonials, VisionAndMission } from '../../components'
import Layout from '../../layout/Layout'

const MediaPage = () => {
  const media = [
    {
      title: "Innovation",
      details: "Leveraging the latest development in real estate. solaris’ projects are the pinnacle of design and innovation.",
      image: "/images/our-media-1.jpg",
      videoUrl: 'https://www.youtube.com/embed/LqTNKy_B9Fs'
    },
    {
      title: "Quality",
      details: "With an unrelenting focus on socurcing only the finest quality materials. solaris’ spaces are desig....",
      image: "/images/our-media-2.jpg",
      videoUrl: 'https://www.youtube.com/embed/OTgFQ3MuoFE'
    },
    {
      title: "Trust",
      details: "With cumulative experience of over 41 years in the field, the promoters have garnered the trust of cus.....",
      image: "/images/our-media-3.jpg",
    },
    {
      title: "Innovation",
      details: "Leveraging the latest development in real estate. solaris’ projects are the pinnacle of design and innovation.",
      image: "/images/our-media-1.jpg",
    },
    {
      title: "Quality",
      details: "With an unrelenting focus on socurcing only the finest quality materials. solaris’ spaces are desig....",
      image: "/images/our-media-2.jpg",
    },
    {
      title: "Trust",
      details: "With cumulative experience of over 41 years in the field, the promoters have garnered the trust of cus.....",
      image: "/images/our-media-3.jpg",
    },
  ]

  return (
    <Layout title={'Media'}>
      <HeroSection title={'Media'} />
      <div className='my-6 lg:my-20'>
        <Media media={media} />
      </div>

      <Testimonials />
      <VisionAndMission />
      <Contact />
    </Layout>
  )
}

export default MediaPage