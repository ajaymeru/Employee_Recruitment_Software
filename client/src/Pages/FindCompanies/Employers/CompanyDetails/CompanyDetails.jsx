import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CompanyDetails.scss'; // Optional: Create a stylesheet for styling

const CompanyDetails = () => {
    const { companyId } = useParams(); // Get companyId from URL params
    const [company, setCompany] = useState(null); // State to hold company details
    const [jobs, setJobs] = useState([]); // State to hold company's jobs
    const [error, setError] = useState(null); // State for handling errors

    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://localhost:4000/api/v1/joblists/companies/${companyId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    setCompany(response.data.company);
                    setJobs(response.data.jobs);
                } else {
                    setError("Failed to fetch company details.");
                }
            } catch (error) {
                console.error("Error fetching company details:", error);
                setError("An error occurred while fetching company details. Please try again later.");
            }
        };

        fetchCompanyDetails();
    }, [companyId]);

    return (
        <div className="CompanyDetails">
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if any */}
            {company ? (
                <div>
                    <h1>{company.companyName}</h1>
                    <img
                        src={company.logo || "https://static.vecteezy.com/system/resources/previews/002/120/143/large_2x/coming-soon-logo-template-design-illustration-vector.jpg"}
                        alt={company.companyName}
                    />
                    <p><strong>Description:</strong> {company.description || "No description available."}</p>

                    <h2>Available Jobs</h2>
                    <div className="job-list">
                        {jobs.length > 0 ? (
                            jobs.map((job) => (
                                <div key={job._id} className="job">
                                    <h3>{job.jobRole}</h3>
                                    <p>{job.jobDescription}</p>
                                    <p><strong>Technologies:</strong> {job.jobTechnologies}</p>
                                    <p><strong>Experience Required:</strong> {job.jobExperienceRequired}</p>
                                </div>
                            ))
                        ) : (
                            <p>No jobs available for this company.</p>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading company details...</p>
            )}
        </div>
    );
};

export default CompanyDetails;
