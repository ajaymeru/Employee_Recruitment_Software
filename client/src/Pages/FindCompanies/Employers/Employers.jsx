import React, { useEffect, useState } from 'react'
import "./Employers.scss"
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import jobfind from "./assets/findjobs.jpg"
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const Employers = () => {
    const [isActive, setActive] = useState(false)
    const btnclick = () => {
        setActive(!isActive)
    }

    // fetch companies
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:4000/api/v1/joblists/employers", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCompanies(response.data.users);
                console.log(response.data.users);

            } catch (error) {
                console.log(error);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <div className='Employers'>
            <div className="imgform">
                <div className="img">
                    <img src={jobfind} alt="" />
                    <h5>Companies</h5>
                </div>
                <div className="form">
                    <form action="">
                        <div className="form-group">
                            <IoSearch />
                            <input type="text" placeholder='Enter company' />
                        </div>
                        <div className="form-group">
                            <IoLocationOutline />
                            <input type="text" placeholder='Location' />
                        </div>
                        <div className={`form-group btn ${isActive ? "active" : ""}`} onClick={btnclick}>
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="companyList">
                {companies.map((company) => (
                    <div key={company._id} className="company">
                        <img
                            src={company.logo ? company.logo : "https://static.vecteezy.com/system/resources/previews/002/120/143/large_2x/coming-soon-logo-template-design-illustration-vector.jpg"}
                            alt={company.companyName}
                        />
                        <h3>{company.companyName}</h3>
                        <Link to={`/companies/${company._id}`}>
                            <button>More</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Employers
