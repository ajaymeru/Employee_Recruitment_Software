import React from 'react'
import "./Home.scss"
import { FaSearchengin } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import suite from "./Assets/suite.png"
import microsoft from "./Assets/microsoft.png"
import google from "./Assets/google.png"
import amazon from "./Assets/amazon.png"
import dell from "./Assets/dell.png"
import { useState, useEffect } from 'react';

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);

    // Reset the click effect after the animation finishes
    useEffect(() => {
        if (isClicked) {
            const timer = setTimeout(() => {
                setIsClicked(false);
            }, 600); // Match animation duration

            return () => clearTimeout(timer);
        }
    }, [isClicked]);

    const handleClick = () => {
        setIsClicked(true);
    };
    return (
        <div className="home">
            <div className="mainpage">
                <div className="mainpage__header">
                    <div className="titile">
                        <p>We Have 208,000+ Live Jobs</p>
                        <h3>Your <span>Dream</span> Job Is Waiting For You</h3>
                    </div>
                    <div className="searchjob">
                        <p>Type your keywork, then click search to find your perfect job.</p>
                        <div className="optionfind" >
                            <div className="searchinput">
                                <FaSearchengin className='fa' />
                                <input type="text" placeholder="Search for jobs" />
                            </div>
                            <div className="locationinput">
                                <CiLocationOn className='fa' />
                                <input type="text" placeholder="City" />
                            </div>
                            <div className="findjobs">
                                <button onClick={handleClick} className={`sparklebtn ${isClicked ? 'clicked' : ''}`}>Find Jobs</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainpagecircle">
                    <div className="firstcircle">
                        <img src={microsoft} alt="" srcset="" style={{ right: "15px" }} />
                        <img src={google} alt="" style={{ left: "15px" }} />
                    </div>
                    <div className="secondcircle">
                        <img src={amazon} alt="" style={{ top: "-10px" }} />
                        <img src={dell} alt="" srcset="" style={{ bottom: "-10px" }} />
                    </div>

                    <div className="suite">
                        <img src={suite} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home