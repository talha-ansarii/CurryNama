import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Faq from './pages/Faq'
import OurStory from './pages/OurStory'
import ListBlogs from './pages/ListBlogs'
import Blog from './pages/Blog'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/ourstory' element={<OurStory />} />
        <Route path='/blogs' element={<ListBlogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

       
    </Routes>
  </BrowserRouter>
  )
}

export default App