import React, { useEffect, useState } from 'react';
import './CompanyScroll.scss';
import CompanyLogos from './CompanyLogos.json';

const CompanyScroll = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(CompanyLogos);
    }, []);

    return (
        <div className="CompanyScroll">
            <div className="scroll-wrapper">
                {images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.name} />
                ))}
            </div>
        </div>
    );
};

export default CompanyScroll;
