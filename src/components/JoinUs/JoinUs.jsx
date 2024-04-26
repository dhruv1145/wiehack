import React, { useState } from 'react'
import './JoinUs.css'

function JoinUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [sport, setSport] = useState("");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            // if (!name || !email || !phone || !address || !sport) {
            //     alert("fill out all details");
            // }

            let body;
            body = { name, email, phone, address, sport };

            const res = await fetch("/coach", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, address, sport
                })
            });

            const data = await res.json();

            alert("Registeration successful");
            setName("")
            setEmail("")
            setPhone("")
            setSport("")
            setAddress("")





        } catch (err) {
            throw new Error(err.message);
        }

    }
    return (
        <div className="join-us">
            <div className="title-join">
                <h1>JOIN US</h1>
            </div>

            <div className="container-join">
                <div className="left-join">
                    <h2>COACH CAREER ENQUIRY</h2>
                    <p>We are hiring coaches and expanding our<br /> comapany .<br />
                        Dont miss the opportunity to be a part of<br /> something big.<br />
                        <span className='career-span'>Get Ready to make an impact !!</span>
                    </p>
                </div>
                <div className="right-join">
                    <div className="form-career">
                        <input type="text"
                            className='career-input'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="text"
                            className='career-input'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="text"
                            className='career-input'
                            placeholder='Phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <input type="text"
                            className='career-input'
                            placeholder='Address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <input type="text"
                            className='career-input'
                            placeholder='Type Your Sport'
                            value={sport}
                            onChange={(e) => setSport(e.target.value)}
                        />
                        <label htmlFor="resume">* Upload your resume</label>
                        <input type="file" id="resume" accept='image/*' onChange={(e) => resumeDetails(e.target.files[0])}
                        />
                        <button className='submit-join' type="submit" onClick={handleSubmit}>Submit</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default JoinUs