import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomePageComponents/Hero'
import HeroAbout from '../components/HomePageComponents/HeroAbout'
import About from '../components/About'
import OurProjects from '../components/HomePageComponents/OurProjects'
import OurClients from '../components/HomePageComponents/OurClients'
import TestimonialsSection from './TestimonialsSection'
import ContactUs from './ContactUs'
import Footer from '../components/Footer'



const Homepage = () => {
  return (
    <div>
      
      <Hero />
      <HeroAbout />
      <OurProjects />
      <OurClients />
      <TestimonialsSection />
      <About />
      <ContactUs />
      <Footer />
    </div>
  )
}
export default Homepage