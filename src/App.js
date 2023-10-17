import React from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Gallary from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Activities/>
      <Booking/>
      <Gallary/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

