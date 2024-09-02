import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import FindJobs from './pages/FindJobs/FindJobs'
import FindEmployer from "./pages/FindEmployers/FindEmployers"

function App() {
  const [loading, setloading] = useState(true)
  const spinner = document.getElementById('spinner')
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none"
      setloading(false)
    }, 500)
  }

  return (
    <>
      {!loading && (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='find-jobs' element={<FindJobs />} />
            <Route path='find-employer' element={<FindEmployer />} />
          </Routes>
        </Router>
      )
      }
    </>
  )
}

export default App
