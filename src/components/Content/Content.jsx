import React from 'react'
import './Content.css'
import { motion } from 'framer-motion'

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
                    <button><a href="">Enquiry</a></button>
                </div>

            </div>
        </div >
    )
}

export default Content