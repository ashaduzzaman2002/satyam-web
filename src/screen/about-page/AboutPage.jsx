import React from 'react'
import Layout from '../../layout/Layout'
import { About, Contact, HeroSection, Testimonials, VisionAndMission } from '../../components'

const AboutPage = () => {

  

  return (
    <Layout title={'About Us'}>
      <HeroSection title={"About Us"} />
      <About />
      <Testimonials />
      <VisionAndMission />
      <Contact />
    </Layout>
  )
}

export default AboutPage

