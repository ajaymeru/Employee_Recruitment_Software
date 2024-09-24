import React from 'react';
import './Home.scss';
import Main from './components/Main/Main.jsx';
import CompanyLogos from './components/companyLogos/CompanyLogos.jsx';
import FollowSteps from './components/FollowSteps/FollowSteps.jsx';
import JoinNow from './components/JoinNow/JoinNow.jsx';
import Category from './components/Category/Category.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';


const Home = () => {
    return (
        <div className="home">
            <Main />
            <CompanyLogos />
            <FollowSteps />
            <JoinNow />
            <Category />
            <Testimonial />
        </div>
    );
};

export default Home;
