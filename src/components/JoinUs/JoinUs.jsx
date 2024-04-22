import React from 'react'
import './JoinUs.css'

function JoinUs() {
    return (
        <div className="join-us">
            <div className="title-join">
                <h1>JOIN US</h1>
            </div>

            <div className="container-join">
                <div className="left-join">
                    <h2>COACH CAREER ENQUIRY</h2>
                    <p>We are hiring coaches and expanding our comapany .<br />
                        Dont miss the opportunity to be a part of something big.<br />
                        <span className='career-span'>Get Ready to make an impact !!</span>
                    </p>
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
                        <input type="text"
                            className='career-input'
                            placeholder='Type Your Sport'
                        />
                        <label htmlFor="resume">* Upload your resume</label>
                        <input type="file" name="" id="resume"
                        />
                        <button className='submit-join' type="submit">Submit</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default JoinUs