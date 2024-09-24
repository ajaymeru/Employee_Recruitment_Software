import React from 'react';
import Slider from 'react-slick';  // Import slick slider
import testimonialsData from './Testimonial.json'; // Import JSON data
import './Testimonial.scss'; // Import custom styles
import 'slick-carousel/slick/slick.css';  // Import slick-carousel core styles
import 'slick-carousel/slick/slick-theme.css';  // Import slick-carousel theme styles

const Testimonial = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='Testimonial'>
            <div className="TestimonialsText">
                <p>Clients Testimonials</p>
                <h4>What People Are Saying About Us</h4>
                <p>There are many variations of passages available, but most have suffered alteration in some form by injected humour or randomised words.</p>
            </div>

            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="TestimonialCard">
                        <div className="userimg">
                            <img src={testimonial.imagesrc} alt={testimonial.name} />
                        </div>
                        <div className="userinfo">
                            <h3>{testimonial.name}</h3>
                            <h5>With us for {testimonial.time_with_us}</h5>
                            <p>{testimonial.description}</p>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;
