import React, { useState, useEffect } from 'react';
import './CompanyLogos.scss';
import companyLogosData from './CompanyLogos.json'; // Renamed the import

const CompanyLogos = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(companyLogosData); // Use the renamed data here
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
}

export default CompanyLogos;
