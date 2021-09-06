import React from 'react'
import {NavLink} from "react-router-dom"
import './style.css'
function Navbar() {
    return (
        <div className="navbar">
            
            <div className="container">
                
                <div className="logo">
                    <h2 className="logo-text">Ultra Profile</h2>
                </div>
                
    
                
                <ul className="ul-list">
                    <li className="list-item"><NavLink exact to="/" activeStyle={{ color:'red' }}>Home</NavLink></li>
                    <li className="list-item"><NavLink to="#">Work</NavLink></li>
                    <li className="list-item"><NavLink to="#">Portfolio</NavLink></li>
                    <li className="list-item"><NavLink to="#">Resume</NavLink></li>
                    <li className="list-item"><NavLink to="#">About</NavLink></li>
                    <li className="list-item"><NavLink to="/contact" activeStyle={{ color:'red' }}>Contact</NavLink></li>
                </ul>
                
            </div>
            
        </div>
    )
}

export default Navbar
