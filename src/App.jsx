import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Careers from './pages/Careers.jsx'
import {Typography} from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="page-wrapper">
      <Router>
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Careers" element={<Careers />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  )
}

export default App
