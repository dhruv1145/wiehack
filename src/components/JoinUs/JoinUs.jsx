import React from 'react'
import './JoinUs.css'

function JoinUs() {
    return (
        <div className="join-us">
            <div className="title">
                <h1>JOIN US</h1>
            </div>

            <div className="container-join">
                <div className="left-join">
                    <h2>COACH CAREER ENQUIRY</h2>
                    <p></p>
                </div>
                <div className="right-join">
                    <div className="form-career">
                        <input type="text"
                            className='career-input'
                            placeholder='Name'
                        />
                        <input type="text"
                            className='career-input'
                            placeholder='Email'
                        />
                        <input type="text"
                            className='career-input'
                            placeholder='Phone'
                        />
                        <input type="text"
                            className='career-input'
                            placeholder='Address'
                        />
                        <div className="custom-select">
                            <label htmlFor="sport">Choose Your Sport</label>
                            <select name="choose your sport" id="sport">
                                <option value="">Baketball</option>
                                <option value="">Baketball</option>
                                <option value="">Baketball</option>
                                <option value="">Baketball</option>
                                <option value="">Baketball</option>
                                <option value="">Baketball</option>

                            </select>
                        </div>
                        <div className="custom-select">
                            <select name="choose your sport" id="sport">
                                <option value="">Baketball</option>
                                <option value="">Baketball</option>
                                <option value="">Baketball</option>
                                <option value="">Baketball</option>
                                <option value="">Baketball</option>
                                <option value="">Baketball</option>

                            </select>
                        </div>

                        <button type="submit">Submit</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default JoinUs