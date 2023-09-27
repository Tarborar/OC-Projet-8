import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/index.scss'

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Side from './components/Side'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Side />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Navigation />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)
