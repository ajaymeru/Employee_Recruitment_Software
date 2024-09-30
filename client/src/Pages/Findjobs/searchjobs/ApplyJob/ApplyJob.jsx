import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ApplyJob.scss';

const ApplyJob = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const [isApplied, setIsApplied] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    throw new Error("No token found, please login.");
                }

                const response = await axios.get(`http://localhost:4000/api/v1/joblists/employee/${jobId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200 && response.data.job) {
                    const jobData = response.data.job[0];
                    setJob(jobData);
                } else {
                    setError("Failed to fetch job details.");
                }
            } catch (error) {
                console.error("Error fetching job details:", error);
                setError("An error occurred while fetching job details. Please try again later.");
            }
        };

        fetchJobDetails();
    }, [jobId]);

    const handleApplyJob = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No token found, please login.");
            }

            const response = await axios.patch(`http://localhost:4000/api/v1/joblists/jobs/${jobId}/apply`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setIsApplied(true);
                setPopupMessage("You have successfully applied for the job.");
                setIsPopupOpen(true);
            }
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.message === "Already applied for this role") {
                setPopupMessage("You have already applied for this job.");
            } else {
                setPopupMessage("An error occurred while applying for the job. Please try again.");
            }
            setIsPopupOpen(true);
        }
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='ApplyJob'>
            {job ? (
                <div className="job-details">
                    <h1>{job.jobcompanyName}</h1>
                    <p><strong>Role:</strong> {job.jobRole}</p>
                    <p><strong>Description:</strong> {job.jobDescription}</p>
                    <p><strong>Technologies:</strong> {job.jobTechnologies}</p>
                    <p><strong>Graduate:</strong> {job.jobGraduate}</p>
                    <p><strong>Experience Required:</strong> {job.jobExperienceRequired}</p>

                    <button onClick={handleApplyJob} className="apply-btn">Apply Job</button>

                    <Popup open={isPopupOpen} closeOnDocumentClick onClose={closePopup}>
                        <div className="modal">
                            <button className="close" onClick={closePopup}>&times;</button>
                            <div className="header">Information</div>
                            <div className="content">{popupMessage}</div>
                        </div>
                    </Popup>
                </div>
            ) : (
                <p>Loading job details...</p>
            )}
        </div>
    );
};

export default ApplyJob;
