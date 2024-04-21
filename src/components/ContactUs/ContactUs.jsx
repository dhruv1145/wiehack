import React from 'react'
import './ContactUs.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function ContactUs() {
    return (
        <div className='contact-page'>
            <div className="title">
                <h1>Contact Us</h1>
            </div>

            <div className="contact-content">
                <div className="left-2">
                    <h1>Feel Free To Write !</h1>
                    <div className="form">
                        <input type="text"
                            placeholder='Name'
                        />
                        <input type="text"
                            placeholder='Email'
                        />
                        <input type="text"
                            placeholder='Phone'
                        />
                        <input type="text"
                            placeholder='Type Your Message Here....'
                        />
                        <button className='submit-button' type="submit">Submit</button>
                    </div>
                </div>
                <div className="right-2">
                    <div className="right-content">
                        <h2>Get in touch</h2>
                        <div className="address">
                            <h3><FaLocationDot /><span>Address</span></h3>
                            <p>K 103 kirti nagar 2nd floor,<br />  kirti nagar  New Delhi - 110015</p>
                        </div>
                        <div className="email">
                            <h3><MdMarkEmailRead /><span>Email</span></h3>
                            <p>guptadhruv926@gmail.com</p>
                        </div>
                        <div className="phone">
                            <h3><FaPhone /><span>Phone</span></h3>
                            <p>+91-7678168496</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs