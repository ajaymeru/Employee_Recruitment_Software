import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordian.scss';

const Accordian = () => {
    const [expanded, setExpanded] = useState(0);

    const faqData = [
        {
            question: "How can I search for open positions?",
            answer: "To search for open positions, simply enter a job title, keyword, or company name into the search bar on the homepage."
        },
        {
            question: "How do I create a personalized salary estimate?",
            answer: "You can create your own personalized salary estimate by entering your job title, location, and years of experience into our salary estimator tool."
        },
        {
            question: "How can I apply for a job through the portal?",
            answer: "Once you’ve found a job listing you're interested in, click on the 'Apply Now' button to submit your resume or be redirected to the company's application site."
        },
        {
            question: "Can I save jobs to apply for later?",
            answer: "Yes! You can save jobs by clicking on the 'Save Job' button, allowing you to review and apply later from your dashboard."
        },
        {
            question: "How can I read company reviews?",
            answer: "You can read reviews by searching for a company’s name on our platform and viewing feedback from current and former employees."
        }
    ];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="Accordian">

            <div className="accordionStyle">
                <div className="inimg">
                    <img src="https://jobnova-shreethemes.vercel.app/static/media/ab01.016884c7bf778010e79c.jpg" alt="" />
                </div>

                <div className="outimg">
                    <img src="https://jobnova-shreethemes.vercel.app/static/media/ab02.f851a3dde08585493f97.jpg" alt="" />
                </div>



            </div>

            <div className="accordianQA">
                <div className="faq">
                    <h5>Frequently Asked Questions</h5>
                    <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>
                <div className="faqbox">
                    {faqData.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                            className='main'
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                                className='questionBox'
                            >
                                <Typography className='question'>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='answerBox'>
                                <Typography className='answer'>{item.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Accordian;
