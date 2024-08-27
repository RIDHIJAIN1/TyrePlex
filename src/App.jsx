import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Deals from './components/Deals'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Questionaire from './components/Questionaire'
import Footer from './components/Footer'
import TyreSold from './components/TyreSold'
import Dropdown from './components/Dropdown'
import PaymentModes from './components/PaymentModes'

function App() {


  return (
    <>
   
     <Header/>
     <Banner/>
     <Deals/>
     <Services/>
     <PaymentModes/>
     <Reviews/>
   
     <TyreSold/>
  
     <Questionaire/>
  
     <Footer/>

    </>
  )
}

export default App
