import { useState } from 'react'
import Hero from './components/Hero/Hero'
import './App.css'
import Service from './components/Services/Service'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Hero />} index />
        <Route element={<Service />} path='services' />
        <Route element={<Hero />} path='whyus' />
        <Route element={<Service />} path='aboutus' />
        <Route element={<Hero />} path='events' />
        <Route element={<Hero />} path='testimonial' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
