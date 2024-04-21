import React from 'react'
import coach_img from '../../assets/coach1.png'
import './About.css'

function About() {
    return (

        <div className="about-container">
            <div className="about-left">
                <img src={coach_img} alt="" />
            </div>
            <div className="about-right">
                <h1>About Us</h1>
                <div className="header-line"></div>
            </div>
        </div>


    )
}

export default About