import React from 'react'
import "./JobsCategory.scss"


const jobCategories = [
    { category: "UI/UX Design", jobsPosted: "100+ Posted New Jobs" },
    { category: "Illustration", jobsPosted: "200+ Posted New Jobs" },
    { category: "Cool Art", jobsPosted: "150+ Posted New Jobs" },
    { category: "Web Design", jobsPosted: "100+ Posted New Jobs" },
    { category: "Product Design", jobsPosted: "110+ Posted New Jobs" },
    { category: "Developer", jobsPosted: "250+ Posted New Jobs" },
    { category: "Animation", jobsPosted: "150+ Posted New Jobs" },
    { category: "100+ More", jobsPosted: "Category" }
];

const JobsCategory = () => {
    return (
        <div className="JobsCategory">
            <div className="JobsCategoryText">
                <p>Jobs Category</p>
                <h4>Choose Your Desire Category</h4>
                <p>There are many variations of passages of available, but the majority have suffered some form, by injected humour, or look even slightly believable.</p>
            </div>
            <div className="JobsCategoryContent">
                <div className="jcCards">
                    {
                        jobCategories.map((text, index) => (
                            <div key={index} className="jcCard hvr-bounce-to-right">
                                <h3>{text.category}</h3>
                                <p>{text.jobsPosted}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default JobsCategory