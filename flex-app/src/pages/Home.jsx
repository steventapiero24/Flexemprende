import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SobreNosotros from '../components/SobreNosotros'
import Benefits from '../components/Benefits'
import CardPrices from '../components/Atomos/CardPrices'
import SobreMi from '../components/SobreMi'
import Comparation from '../components/ForWhat'

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
    </>
  )
}

export default Home