import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SobreNosotros from '../components/SobreNosotros'
import Benefits from '../components/Benefits'
import CardPrices from '../components/Atomos/CardPrices'
import SobreMi from '../components/SobreMi'
import Comparation from '../components/ForWhat'
import OtherServices from '../components/OtherServices'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
     <Nav />
     <Hero  />  
     <Benefits />
     <SobreNosotros />
     <CardPrices />
     <SobreMi />
     <Comparation />
     <OtherServices />  
     <Footer />
    </>
  )
}

export default Home