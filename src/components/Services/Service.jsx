import React from 'react'
import './Service.css'
import Content from '../Content/Content'
import sports_img from '../../assets/sports.png'
import grp_img from '../../assets/group.jpg'
import league_img from '../../assets/olympics2.jpeg'
import analysis_img from '../../assets/performance.jpeg'

function Service() {
    return (
        <div className="service">

            <div className="title">
                <h1>Services</h1>
                <img src={sports_img} alt="" />
            </div>

            <div className="content">
                <Content name="Sports Coaching" text="Get coaching for almost all kinds of sports from experienced and professional coaches for the age group of 3 yrs and above. Basketball is our core sport, and with our affiliation with Thane District Basketball Association, we can provide your child with maximum support to excel in the sport as a career." image={grp_img} />
                <Content name="Personalized Leagues" text="Get coaching for almost all kinds of sports from experienced and professional coaches for the age group of 3 yrs and above. Basketball is our core sport, and with our affiliation with Thane District Basketball Association, we can provide your child with maximum support to excel in the sport as a career." image={league_img} />
                <Content name="Performance Analysis" text="Get coaching for almost all kinds of sports from experienced and professional coaches for the age group of 3 yrs and above. Basketball is our core sport, and with our affiliation with Thane District Basketball Association, we can provide your child with maximum support to excel in the sport as a career." image={analysis_img} />
            </div>





        </div>
    )
}

export default Service