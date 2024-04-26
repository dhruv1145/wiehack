import React, { useState } from 'react'
import './Talent.css'

function Talent() {
    const [video, setVideo] = useState('');

    return (
        <div className="talent-main">
            <h1>Forge 2.0</h1>
            <p>forge 2.0 is a talent hunt program to identify young and raw sporting talent.<br />
                we provide scholarships to people who stand out in this program.<br />
                we train them and provide them with technology to improve thier skills.
            </p>
            <div className="talent">
                <h2>Uplaod your videos to get free scholarship**</h2>
                <input type="file"
                    className='talent-video'
                    value={video}

                    name="" id="" />
                <button>Upload</button>
            </div>
        </div>

    )
}

export default Talent