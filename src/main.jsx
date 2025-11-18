import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Assessment from './pages/Assessment'
import Results from './pages/Results'
import Roadmap from './pages/Roadmap'
import PDF from './pages/PDF'
import Student from './pages/Student'
import Parent from './pages/Parent'
import Admin from './pages/Admin'
import Waitlist from './pages/Waitlist'
import About from './pages/About'
import Contact from './pages/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/results" element={<Results />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/pdf" element={<PDF />} />
        <Route path="/student" element={<Student />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
