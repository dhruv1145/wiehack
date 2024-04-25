import React from 'react'
import Programs from '../Programs/Programs'
import './Program.css'

function Program() {
    return (
        <>
            <div className="main">
                <h1>Online Courses</h1>
                <div className="program">
                    <Programs name="VertCode" />
                    <Programs name="Dribbling Workout" />

                </div>
                <div className="program">
                    <Programs name="Speed Agility Training" />
                    <Programs name="Strength Training" />

                </div>
            </div>

        </>


    )
}

export default Program