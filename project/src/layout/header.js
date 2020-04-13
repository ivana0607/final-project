import React from 'react'
import './header.css'
import { isLogedIn, LogOut } from '../services/auth.service'

export default function Header() {
    const logOutUser = () => {
        LogOut();
    }
    return (
        <header className="main-header">
            {isLogedIn() ? <a href="/welcome">
                <div onClick={logOutUser} className="log-out">LOG OUT</div>
            </a> : null}
            <img className="img" alt="camera" src="https://img.icons8.com/wired/64/000000/movie-projector.png" />
            <h1 className="header-title">Welcome to the Movieland</h1>
        </header>
    )
}