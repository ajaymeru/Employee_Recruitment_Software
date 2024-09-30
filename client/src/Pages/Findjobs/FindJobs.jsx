import React from 'react'
import "./FindJobs.scss"
import SearchJobs from './searchjobs/SearchJobs'
import Accordian from './Accordian/Accordian'

const FindJobs = () => {
  return (
    <div className='FindJobs'>
      <SearchJobs />
      <Accordian />
    </div>
  )
}

export default FindJobs