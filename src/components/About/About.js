import './About.scss'
import React from 'react'
import { hero } from '../../assets/img/linkImg';
import resume from '../../assets/resume/Son-Tran-Resume.pdf'

const About = () => {
    return (
        <div id='about' className='bg dark'>
            <div className="container">
                <h1 className="title">About me</h1>
                <div className="about-detail">
                    <div className="img-part">
                        <img className='img-hero' src={hero} alt="hero" />
                    </div>
                    <div className="content-part">
                        <p>
                            I am a passionate Front-end Developer with a unique journey into the tech world, driven by perseverance and a love for problem-solving. Starting with little experience in technology, I’ve worked tirelessly to master HTML, CSS, JavaScript, and React.js, earning certifications and building real-world projects along the way.
                        </p>

                        <p>
                            With a background that has sharpened my resilience and teamwork skills, I thrive in learning environments and enjoy taking on challenges that push me to grow. Tech inspires me to create impactful solutions and connect with a global community.
                        </p>

                        <div className="wrap-btn">
                            <a className="nav-link" href={resume} target="_blank" rel="noopener noreferrer">
                                <button className="button-back">
                                    My Resume
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;