import React from 'react'
import Navbar from './components/Navbar/Navbar'
import NavbarBanner from './components/Navbar/NavbarBanner'
import Hero from './components/Hero/Hero'
import NumberCounter from './components/NumberCounter/NumberCounter'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <div>
        <Navbar />
        <NavbarBanner />
        <Hero />
        <NumberCounter />
        <WhyChooseUs />
      </div>
    </main>
  )
}

export default App