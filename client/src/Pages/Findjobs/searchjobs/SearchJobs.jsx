import React, { useEffect, useState } from 'react'
import "./SearchJobs.scss"
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsSuitcaseLg } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import jobfind from "./assets/findjobs.jpg"
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import { useNavigate } from "react-router-dom"

const SearchJobs = () => {

    const [isActive, setActive] = useState(false)
    const btnclick = () => {
        setActive(!isActive)
    }

    const navigate = useNavigate()

    // getting jobs from backend
    const [jobs, setJobs] = useState([])
    const [curentPage, setCurentPage] = useState(1)
    const jobsperPage = 12

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const token = localStorage.getItem("token")
                const response = await axios.get("http://localhost:4000/api/v1/joblists/jobs", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setJobs(response.data)

            } catch (error) {
                console.log(error);
            }
        }
        fetchJobs()
    }, [])

    const handleApply = (jobId) => {
        navigate(`/jobs/${jobId}`)
    }

    // pagination logic
    const lastJob = curentPage * jobsperPage
    const firstJob = lastJob - jobsperPage
    const currentJob = jobs.slice(firstJob, lastJob)
    const paginate = (pageNum) => setCurentPage(pageNum)

    const handlePageChange = (event, value) => {
        setCurentPage(value);
    };

    return (
        <div className='SearchJobs'>
            <div className="imgform">
                <div className="img">
                    <img src={jobfind} alt="" />
                    <h5>Job Vacancies</h5>
                </div>
                <div className="form">
                    <form action="">
                        <div className="form-group">
                            <IoSearch />
                            <input type="text"
                                placeholder='Enter title, company, skill'
                            />
                        </div>
                        <div className="form-group">
                            <IoLocationOutline />
                            <input type="text"
                                placeholder='Location'
                            />
                        </div>
                        <div className="form-group">
                            <GrUserWorker />
                            <select name="" id="">
                                <option value="">Fresher</option>
                                <option value="">0-1</option>
                                <option value="">1-2</option>
                                <option value="">2-4</option>
                                <option value="">4-8</option>
                                <option value="">8-16</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <BsSuitcaseLg />
                            <select name="" id="">
                                <option value="">Onsite</option>
                                <option value="">Hybrid</option>
                                <option value="">Remote</option>
                                <option value="">Partime</option>
                                <option value="">Full time</option>
                                <option value="">Freelancer</option>
                            </select>
                        </div>
                        <div className={`form-group btn ${isActive ? "active" : ""}`} onClick={btnclick}>
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>

            </div >
            <div className="joblist">
                {currentJob.map((job) => (
                    <div className="job-card" key={job._id}>

                        <div className="companyinfo">
                            <h3 style={{textAlign:"center"}}>{job.jobcompanyName}</h3>
                            <button onClick={() => handleApply(job.jobId)} >Apply</button>
                        </div>

                        <div className="roleinfo">
                            <p>Role: {job.jobRole}</p>
                            <p className='decription'>{job.jobDescription}</p>
                        </div>

                        <div className="techinfo">
                            <p>Technologies: {job.jobTechnologies}</p>
                        </div>

                        <div className="qualificationinfo">
                            <p> Graduate: {job.jobGraduate}</p >
                            <p> {job.jobExperienceRequired}</p>
                        </div>



                    </div>
                ))}
            </div>

            <div className="pagination">
                <Stack>
                    <Pagination
                        count={Math.ceil(jobs.length / jobsperPage)}
                        page={curentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                        sx={{
                            '& .Mui-selected': {
                                backgroundColor: '#4CAF50 !important',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#45a049'
                                }
                            }
                        }}
                    />
                </Stack>
            </div>

        </div >
    )
}

export default SearchJobs