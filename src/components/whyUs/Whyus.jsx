import React from 'react'
import './Whyus.css'
import coach_img from '../../assets/coach1.png'
function Whyus() {
    return (
        <div className="why-container">
            <div className="why-left">
                <img src={coach_img} alt="" />
            </div>
            <div className="why-right">
                <div className="why-title">
                    <h1>Why Us</h1>
                    <div className="header-line"></div>
                </div>

                <div className="why-description">
                    <p>Our sports startup, driven by a passion to bridge the gap between coaches and athletes, offers unparalleled access to advanced training technology, performance analytics, and sports education. Through our innovative approach, we aim to elevate India's medal tally by nurturing top talent and fostering a stronger coach-athlete connection. With our comprehensive solutions, we're poised to revolutionize sports training and propel India to new heights of athletic excellence.Our sports startup, driven by a passion to bridge the gap between coaches and athletes, offers unparalleled access to advanced training technology, performance analytics, and sports education. Through our innovative approach, we aim to elevate India's medal tally by nurturing top talent and fostering a stronger coach-athlete connection. With our comprehensive solutions, we're poised to revolutionize sports training and propel India to new heights of athletic excellence.</p>
                </div>
            </div>
        </div>
    )
}

export default Whyus