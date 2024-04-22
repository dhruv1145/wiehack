import React, { useEffect, useState } from 'react'
import './Events.css'
import { SlCalender } from "react-icons/sl";
//import { axios } from 'axios';

function Events() {

    const [events, setEvents] = useState("");



    /*useEffect(async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const { data } = await axios.get("http://localhost:8000/events", config);
            console.log(data);
        } catch (err) {
            throw new Error(err.message);
        }
    }, [])*/
    return (
        <div className="events">
            <div className="container">
                <h1>Upcoming Events</h1>
                <div className="events-list">
                    {
                        events ? "" :
                            <div className='event-calender'>

                                <div className="title">
                                    <h2>1. Maitree Sports Tournament</h2>
                                    <h4>Date: 22-24 April 2024</h4>
                                    <p>Inter college sports tournament</p>
                                </div>
                                <div className="title">
                                    <h2>2. DME Sports Tournament</h2>
                                    <h4>Date: 29-31 April 2024</h4>
                                    <p>Inter college sports tournament</p>
                                </div>
                                <div className="title">
                                    <h2>3. DTU Sports Tournament</h2>
                                    <h4>Date: 5-7 may 2024</h4>
                                    <p>Inter college sports tournament</p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Events