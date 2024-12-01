import React from 'react'
import Employers from './Employers/Employers.jsx'
import "./FindCompanies.scss"
import Accordian from "../Findjobs/Accordian/Accordian"

const FindCompanies = () => {
  return (
    <div className='FindCompanies'>
      <Employers />
      <Accordian />
    </div>
  )
}

export default FindCompanies