import React from 'react'
import "./FollowSteps.scss"
import jobSeeking from "./Assets/job-seeking.gif"
import curriculumVitae from "./Assets/curriculum-vitae.gif"
import user from "./Assets/user.gif"
import checked from "./Assets/checked.png"

const FollowSteps = () => {
    return (
        <div className="FollowSteps">
            <div className="stepsText">
                <p>How It Work</p>
                <h6>Follow Easy 4 Steps</h6>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="stepsCards">
                <div className="card hvr-sweep-to-bottom">
                    <img src={jobSeeking} alt="" srcset="" />
                    <h6>Search Jobs</h6>
                    <p>The standard chunk of used below of those interested.</p>
                </div>
                <div className="card hvr-sweep-to-bottom">
                    <img src={curriculumVitae} alt="" srcset="" />
                    <h6>Search Jobs</h6>
                    <p>The standard chunk of used below of those interested.</p>
                </div>
                <div className="card hvr-sweep-to-bottom">
                    <img src={user} alt="" srcset="" />
                    <h6>Search Jobs</h6>
                    <p>The standard chunk of used below of those interested.</p>
                </div>
                <div className="card hvr-sweep-to-bottom">
                    <img src={checked} alt="" srcset="" />
                    <h6>Search Jobs</h6>
                    <p>The standard chunk of used below of those interested.</p>
                </div>

            </div>
        </div>
    )
}

export default FollowSteps