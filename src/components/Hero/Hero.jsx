import React from 'react'
import "./Hero.css"
import hero_img from "../../assets/images.png"
import hero_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import { motion } from "framer-motion"
import NumberCounter from "number-counter";
import Header from '../Header/Header'
import { Link } from "react-scroll";

const Hero = () => {
    const transition = { duration: 3, type: "spring" };
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>

            <div className="left-h">

                {/* the best ad */}
                <div className="the-best">
                    <motion.div
                        initial={{ left: mobile ? "178px" : '238px' }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "tween" }}
                    ></motion.div>
                    <span>FIRST SPORTS & FITNESS FIRM IN THE TOWN</span>
                </div>
                {/* Hero text */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">ELEVATING </span>
                        <span>ATHLETES</span>
                    </div>
                    <div>
                        <span>EMPOWERING COACHES</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and
                            live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* experience figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={20} start={10} delay={4} preFix="+" />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={55} start={40} delay={4} preFix="+" />
                        </span>
                        <span>Sports Federations</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} delay={2} preFix="+" />
                        </span>
                        <span>Sports</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className="hero-btns">
                    <button className="btn"><a href="/contactus">Get Started</a></button>
                    <button className="btn"><a href="/aboutus">Learn More</a></button>
                </div>
            </div>

            {/* Right Side */}
            <div className="right-h">




                {/* hero images */}
                <img className="hero-img" src={hero_img} alt="" />
                <motion.img
                    initial={{ right: mobile ? "11rem" : '11rem' }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                    className="hero-back"
                    src={hero_back}
                    alt=""
                />


            </div>
        </div>
    );
};

export default Hero;