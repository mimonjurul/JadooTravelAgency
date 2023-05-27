import React from 'react'
// import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Services from '../../Components/Services/Services'
import Destinations from '../../Components/Destinations/Destinations'
import Bookatrip from '../../Components/Bookatrip/Bookatrip'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Clients from '../../Components/Clients/Clients'
import Subscription from '../../Components/Subscription/Subscription'
import Footer from '../../Components/Footer/Footer'
import './Homepage.css'

const Homepage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Hero/>
    <Services/>
    <Destinations/>
    <Bookatrip/>
    <Testimonials/>
    <Clients/>
    <Subscription/>
    <Footer/>
    </>
  )
}

export default Homepage