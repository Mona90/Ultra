import React from 'react'
import {Link, NavLink} from "react-router-dom"
import './style.css'
import {BsDoorClosed} from "react-icons/bs";
function Navbar() {
    return (
        <div className="navbar">
            
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <h2 className="logo-text">Ultra</h2>
                </div>
                
    
                <div className="align-items-center nav justify-content-between">
                    <ul className="ul-list">
                        <li className="list-item"><NavLink exact to="/" activeStyle={{ color:'red' }}>Home</NavLink></li>
                        <li className="list-item"><NavLink to="/map">Map</NavLink></li>
                        <li className="list-item"><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li className="list-item"><NavLink to="#">Resume</NavLink></li>
                        <li className="list-item"><NavLink to="#">About</NavLink></li>
                        <li className="list-item"><NavLink to="/contact" activeStyle={{ color:'red' }}>Contact</NavLink></li>
                    </ul>
                    <div className='login'>
                       <Link to="/login"><BsDoorClosed /></Link> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
