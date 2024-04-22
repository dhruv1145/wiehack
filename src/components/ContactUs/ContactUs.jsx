import React, { useState } from 'react'
import './ContactUs.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { motion } from 'framer-motion'
//import { axios } from 'axios';

function ContactUs() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();
    const handleSubmit = async () => {
        try {
            if (!name || !email || !phone || !message) {
                throw new Error("Please fill out all the details")
            }
            let body;
            body = { name, email, message, phone };
            setName("");
            setPhone("");
            setMessage("");
            setEmail("");
            alert("response recorded!!")
            console.log(body);
            const { data } = await axios.post("http://127.0.0.1:8000/athlete", body);
        } catch (err) {
            throw new Error(err.message);
        }

    }
    return (
        <div className='contact-page'>
            <div className="title-contact">
                <motion.h1>Contact Us</motion.h1>
            </div>

            <div className="contact-content">
                <div className="left-2">
                    <motion.h1
                        initial={{
                            y: -100
                        }}
                        animate={{
                            y: 0
                        }}
                        transition={{
                            duration: '1'
                        }}
                    >Feel Free To Write !</motion.h1>
                    <div className="form">
                        <input type="text"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="text"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="text"
                            placeholder='Phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <input type="text"
                            placeholder='Type Your Message Here....'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button className='submit-button' type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
                <div className="right-2">
                    <div className="right-content">
                        <h2>Get in touch !</h2>
                        <div className="credentials">
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
        </div>
    )
}

export default ContactUs