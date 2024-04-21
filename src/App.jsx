import { useState } from 'react'
import Hero from './components/Hero/Hero'
import './App.css'
import Service from './components/Services/Service'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ContactUs from './components/ContactUs/ContactUs'
import Events from './components/Events/Events'
import JoinUs from './components/JoinUs/JoinUs'
import About from './components/AboutUs/About'
import Whyus from './components/whyUs/Whyus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Hero />} index />
        <Route element={<Service />} path='services' />
        <Route element={<Whyus />} path='whyus' />
        <Route element={<About />} path='aboutus' />
        <Route element={<Events />} path='events' />
        <Route element={<ContactUs />} path='contactus' />
        <Route element={<JoinUs />} path='joinus' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
