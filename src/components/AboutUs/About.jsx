import React from 'react'
import coach_img from '../../assets/coach1.png'
import './About.css'
import a from '../../assets/1.png';
import b from '../../assets/3.png';
import c from '../../assets/4.png';
import d from '../../assets/5.png';
import e from '../../assets/6.png';
import basketball from '../../assets/bcoach.jpeg'
import swimming from '../../assets/scoach.jpeg'
import football from '../../assets/tcoach.jpeg'
import tennis from '../../assets/dcoach.jpg'

function About() {
    return (

        <div className="about-container">
            <div className="about-text">
                <h1>About Us</h1>
                <p>Our sports startup, driven by a passion to bridge the gap between coaches and athletes, offers unparalleled access to advanced training technology, performance analytics, and sports education. Through our innovative approach, we aim to elevate India's medal tally by nurturing top talent and fostering a stronger coach-athlete connection. With our comprehensive solutions, we're poised to revolutionize sports training and propel India to new heights of athletic excellence.Our sports startup, driven by a passion to bridge the gap between coaches and athletes, offers unparalleled access to advanced training technology, performance analytics, and sports education. Through our innovative approach, we aim to elevate India's medal tally by nurturing top talent and fostering a stronger coach-athlete connection. With our comprehensive solutions, we're poised to revolutionize sports training and propel India to new heights of athletic excellence.</p>
            </div>
            <div className="about-sports">
                <h1>Our Sports</h1>
                <div className="sports-images">
                    <ul>
                        <div className="group">
                            <li><img src={a} alt="" />FOOTBALL</li>
                            <li><img src={b} alt="" />BASKETBALL</li>
                        </div>
                        <div className="group">
                            <li><img src={c} alt="" />SWIMMING</li>
                            <li><img src={d} alt="" />TENNIS</li>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="team">
                <h1>Our Team</h1>
                <div className="team-list">
                    <ul>
                        <div className="team-info">
                            <li><img src={football} alt="" />FOOTBALL</li>
                            <li><img src={basketball} alt="" />BASKETBALL</li>
                        </div>
                        <div className="team-info">
                            <li><img src={swimming} alt="" />SWIMMING</li>
                            <li><img src={tennis} alt="" />TENNIS</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default About