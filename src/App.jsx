import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Faq from './pages/Faq'
import OurStory from './pages/OurStory'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/ourstory' element={<OurStory />} />
       
    </Routes>
  </BrowserRouter>
  )
}

export default App