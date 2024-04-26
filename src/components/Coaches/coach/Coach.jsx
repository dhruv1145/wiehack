import React from 'react'
import './Coach.css'

import coach1 from '../../../assets/bcoach.jpeg'
function Coach() {
    return (
        <div className="coach-profile">
            <div className="coach-details">
                <div className="coach-main">
                    <img src={coach1} alt="" />
                    <h1>Name: Vipin Alagh</h1>

                </div>

                <h2>Sport : Basketball</h2>
                <h2>Rating : 5 stars </h2>
                <h2>Level : National</h2>
            </div>
        </div>
    )
}

export default Coach