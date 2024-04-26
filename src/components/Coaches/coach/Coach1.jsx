import React from 'react'
import './Coach1.css'

function Coach1() {
    return (
        <div class="wrapper">
            <h1>Our Coaches</h1>
            <div class="container-9">
                <input type="radio" name="slide" id="c1" checked />
                <label for="c1" class="card">
                    <div class="row">
                        <div class="icon">1</div>
                        <div class="description">
                            <h4>VIPIN ALAGH</h4>
                            <p>Vipin alagh is a basketball coach <br />
                                he has also represented india in basketball . <br />
                            </p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c2" />
                <label for="c2" class="card">
                    <div class="row">
                        <div class="icon">2</div>
                        <div class="description">
                            <h4>Harshil Manchanda</h4>
                            <p>Harshil Manchanda is a Badminton coach <br />
                                he has also represented delhi in nationals .</p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c3" />
                <label for="c3" class="card">
                    <div class="row">
                        <div class="icon">3</div>
                        <div class="description">
                            <h4>Himanshu Uniyal</h4>
                            <p>Himanshu uniyal is a football player .<br />
                                He has also played for shimla football club.<br />
                                He has trained students in many schools and colleges.
                            </p>
                        </div>
                    </div>
                </label>
                <input type="radio" name="slide" id="c4" />
                <label for="c4" class="card">
                    <div class="row">
                        <div class="icon">4</div>
                        <div class="description">
                            <h4>Akshay Bisht</h4>
                            <p>Akshay Bisht is a athletics coach.<br />
                                He has played in khelo india and has mentored <br />
                                many players.
                            </p>
                        </div>
                    </div>
                </label>


            </div>
        </div>
    )
}

export default Coach1;