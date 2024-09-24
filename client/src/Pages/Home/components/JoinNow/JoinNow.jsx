import React from 'react'
import "./JoinNow.scss"
import man from "./Assets/man1.png"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()

const JoinNow = () => {
    return (
        <div className="bgcolor">

            <div className="JoinNow">
                <div className="joinNowText" data-aos="fade-right" data-aos-duration="1500">
                    <p>Recent Job</p>
                    <h5>Over all 10,00+ Talented People Registered in Our Website</h5>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <button className='line-shade'>Join Now</button>
                </div>
                <div className="joinNowman"  >
                    <img src={man} alt="" srcset="" data-aos="fade-left"
                        data-aos-duration="1500" />
                </div>
            </div>
        </div>

    )
}

export default JoinNow