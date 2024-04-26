import React from 'react'
import Coach from './coach/Coach'
import './Coaches.css'

function Coaches() {
    return (
        <div className="coaches">
            <div className="group-2">
                <Coach />
                <Coach />
            </div>

            <div className="group-2">
                <Coach />
                <Coach />
            </div>

            <div className="group-2">
                <Coach />
                <Coach />
            </div>

        </div>
    )
}

export default Coaches