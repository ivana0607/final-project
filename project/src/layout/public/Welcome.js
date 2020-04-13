import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'



export default function Welcome() {


    return (
        <div className="welcome">
            <div className="welcome-card">
                {/* <h1>Welcome to the Movieland</h1> */}
                <h2>Are you looking for a movie…</h2>
                <h3>Please register or log in</h3>
                <Link className="btn-link" to="/login">LOG IN</Link>
                <Link className="btn-link" to="/register">REGISTER</Link>
            </div>
        </div>
    )
}