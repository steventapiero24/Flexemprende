import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SobreNosotros from '../components/SobreNosotros'
import Benefits from '../components/Benefits'
import CardPrices from '../components/Atomos/CardPrices'

const Home = () => {
  return (
    <>
     <Nav />
     <Hero  />  
     <Benefits />
     <SobreNosotros />
     <CardPrices />
    </>
  )
}

export default Home