import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

function Home({ setIsPopupOpen }) {
    return (
        <div>
           <Hero setIsPopupOpen={setIsPopupOpen}/>
           <About/>
           <Services/>
           <WhyChooseUs setIsPopupOpen={setIsPopupOpen}/>
           <Footer setIsPopupOpen={setIsPopupOpen}/>
        </div>
    )
}

export default Home
