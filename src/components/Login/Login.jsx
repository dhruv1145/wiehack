import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitt = (e) => {
        e.preventDefault();
        // axios.post('/login', { email, password })
        //     .then(result => {
        //         console.log(result)
        //         if (result.data === 'success') {
        //             alert('login')
        //         }
        //     })

    };
    return (
        <div className="login-form">
            <form action="" className='form-signin'>
                <input type="text"
                    className='login-text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="text"
                    className='login-text'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onSubmit={handleSubmitt} className='login-button'>Submit</button>
            </form>
        </div>
    )
}

export default Login