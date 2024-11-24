import { useState } from 'react'

import relca from './assets/icons/relca.png';
import Groupe from './assets/icons/Groupe.svg';
import Vector from './assets/icons/Vector.svg';

import HeaderIndex from './components/HeaderIndex';
import Aboutindex from './components/Aboutindex';
import HowItWorks from './components/HowItWorks';
import Rewiews from './components/Rewiews';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <HeaderIndex />
      <Aboutindex />
      <HowItWorks />
      <Rewiews />
      <Footer />  
    </>
  )
}

export default App
