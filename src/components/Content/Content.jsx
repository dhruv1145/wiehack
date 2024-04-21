import React from 'react'
import './Content.css'
import grp_img from '../../assets/group.jpg'

function Content({ props }) {
    return (
        <div className='main-content'>
            <div className="title-content">
                <h1>Sports Coaching</h1>
            </div>
            <div className="sub-content">
                <img src={grp_img} alt="" />
                <div className="sub-right">
                    <p>Get coaching for almost all kinds of sports from experienced and professional coaches for the age group of 3 yrs and above. Basketball is our core sport, and with our affiliation with Thane District Basketball Association, we can provide your child with maximum support to excel in the sport as a career.</p>
                    <button><a href="">Enquiry</a></button>
                </div>

            </div>
        </div >
    )
}

export default Content