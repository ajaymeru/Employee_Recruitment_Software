import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home/Home"
import FIndEmployers from "./Pages/FindEmployers/FindEmployers"
import FindJobs from './Pages/FindJobs/FindJobs'
import Footer from './Components/Footer/footer'
import SignUp from './Components/SignUp/SignUp'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobs' element={<FindJobs />} />
          <Route path='/employers' element={<FIndEmployers />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
