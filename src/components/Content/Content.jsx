import React from 'react'
import './Content.css'
import grp_img from '../../assets/group.jpg'

function Content(props) {
    return (
        <div className='main-content'>
            <div className="title-content">
                <h1>{props.name}</h1>
            </div>
            <div className="sub-content">
                <img src={props.image} alt="" />
                <div className="sub-right">
                    <p>{props.text}</p>
                    <button><a href="">Enquiry</a></button>
                </div>

            </div>
        </div >
    )
}

export default Content