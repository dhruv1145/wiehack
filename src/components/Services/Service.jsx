import React from 'react'
import './Service.css'
import Content from '../Content/Content'
import sports_img from '../../assets/sports.png'

function Service() {
    return (
        <div className="service">

            <div className="title">
                <h1>Services</h1>
                <img src={sports_img} alt="" />
            </div>

            <div className="content">
                <Content />
            </div>





        </div>
    )
}

export default Service