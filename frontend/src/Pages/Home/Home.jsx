import React from 'react';
import "./Home.scss";
import MainPage from './mainpage/Mainpage';
import CompanyScroll from './section2/CompanyScroll';
import FollowSteps from './followSteps/FollowSteps';
import JoinNow from './joinNow/JoinNow';
import JobsCategory from './JobsCategory/JobsCategory';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="home">
            <MainPage />
            <CompanyScroll />
            <FollowSteps />
            <JoinNow />
            <JobsCategory />
            <Testimonials />
        </div>
    );
};

export default Home;
