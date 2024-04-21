import React, { useEffect, useState } from 'react'
import './Events.css'
import { SlCalender } from "react-icons/sl";

function Events() {

    const [events, setEvents] = useState("");

    const getData = () => {
        fetch()
    }

    useEffect(() => {

    }, [])
    return (
        <div className="events">
            <div className="container">
                <h1>Upcoming Events</h1>
                <div className="events-list">
                    {
                        events ? "" :
                            <div className='event-calender'>
                                <div className="calender"><SlCalender /></div>
                                <div className="title">
                                    <h2>OOPS NO UPCOMING EVENTS!</h2>
                                    <h4>Come back here after some time !</h4>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Events