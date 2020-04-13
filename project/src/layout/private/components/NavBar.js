import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {



    return (<div className="nav-bar">
        <NavLink activeClassName="active-link" to="/home"><label>HOME</label></NavLink>
        <NavLink activeClassName="active-link" to="/database"><label>MOVIE DATABASE</label></NavLink>
        <NavLink activeClassName="active-link" to="/quiz"><label>TOP MOVIES</label></NavLink>


    </div>

    )
}