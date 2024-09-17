import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialjson from './Testimonials.json';
import './Testimonials.scss';

const Testimonials = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className='Testimonials' style={{ width: "80%", margin: "auto" }} >
            <div className="TestimonialsText">
                <p>Clients Testimonials</p>
                <h4>What People Are Saying About Us</h4>
                <p>There are many variations of passages available, but most have suffered alteration in some form by injected humour or randomised words.</p>
            </div>
            <div className="Testimonialscards">
                <Slider {...settings}>
                    {testimonialjson.map((testimonial, index) => (
                        <div className="Testimonialscard" key={index}>
                            <div className="testmonialImg">
                                <img src={testimonial.imagesrc} alt={testimonial.name} />
                            </div>
                            <h5>{testimonial.name}</h5>
                            <p>{testimonial.time_with_us}</p>
                            <p>{testimonial.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

// Custom Next Arrow component
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "gray",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
};

// Custom Previous Arrow component
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "gray",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
};

export default Testimonials;
