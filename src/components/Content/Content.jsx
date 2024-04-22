import React from 'react'
import './Content.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Content(props) {
    return (
        <div className='main-content'>
            <div className="title-content">
                <motion.h1
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: "2",
                        delay: "1"
                    }}
                >{props.name}</motion.h1>
            </div>
            <div className="sub-content">
                <img src={props.image} alt="" />
                <div className="sub-right">
                    <p>{props.text}</p>
                    <button><Link to="/contactus">Enquiry</Link></button>
                </div>

            </div>
        </div >
    )
}

export default Content