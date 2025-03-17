import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
           <Hero/>
           <About/>
           <Services/>
           <WhyChooseUs/>
           <Footer/>
        </div>
    )
}

export default Home
