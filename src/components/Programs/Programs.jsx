import React from 'react'
import './Programs.css'

function Programs(props) {
    return (
        <div className="programs">
            <div class="container-1">
                <div class="card">
                    <div class="imgBx">
                        <img src="" />
                    </div>
                    <div class="contentBx">
                        <h2>{props.name}</h2>


                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs