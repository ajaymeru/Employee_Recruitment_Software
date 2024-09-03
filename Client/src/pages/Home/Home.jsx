import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaAngleDoubleRight, FaBuilding } from 'react-icons/fa';
import { SiGnuprivacyguard } from "react-icons/si";
import { MdCloudUpload } from "react-icons/md";
import { motion } from 'framer-motion';
import Illustration from "./Assets/Illustration.png";
import waves from "./Assets/waves.svg";
import companies from "./companies.json";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="waves">
                    <img src={waves} alt="waves background" />
                </div>
                <div className="homeMain">
                    <div className="left">
                        <div className="text">
                            <h3>Find a job that suits your interest & skills.</h3>
                            <p>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
                        </div>
                        <div className="searchbox">
                            <div className="input-wrapper">
                                <FaSearch className="icon" />
                                <input type="text" placeholder="Job title, keyword..." />
                            </div>
                            <div className="input-wrapper">
                                <FaMapMarkerAlt className="icon" />
                                <input type="text" placeholder="Location" />
                            </div>
                            <button type="submit">Find Job</button>
                        </div>
                    </div>
                    <div className="mainright">
                        <img src={Illustration} alt="Illustration" />
                    </div>
                </div>
                <div className="companylogos">
                    <motion.div
                        className="marquee"
                        initial={{ x: "100%" }}
                        animate={{ x: "-100%" }}
                        transition={{
                            ease: "linear",
                            duration: 30,
                            repeat: Infinity
                        }}
                    >
                        <div className="marquee-content">
                            {companies.map((company, index) => (
                                <div key={index} className="company-logo">
                                    <img src={company.logoUrl} alt={company.name} title={company.name} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="process">
                    <div className="process-text">
                        <h2>Land Your Dream Job</h2>
                        <p>Increase your chances of working with one of the Top Corporates</p>
                    </div>
                    <div className="steps">
                        <div className="step">
                            <div className="icon">
                                <SiGnuprivacyguard />
                            </div>
                            <p>Register</p>
                        </div>

                        <div className="step">
                            <div className="icon">
                                <MdCloudUpload />
                            </div>
                            <p>Upload Resume</p>
                        </div>

                        <div className="step">
                            <div className="icon">
                                <FaAngleDoubleRight />
                            </div>
                            <p>Apply Job</p>
                        </div>

                        <div className="step">
                            <div className="icon">
                                <FaBuilding />
                            </div>
                            <p>Get Hired</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
