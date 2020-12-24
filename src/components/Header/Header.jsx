import React from 'react';
import './Header.css';
import logo from '../../assets/images/portfolio_logo.png';

export default function Header() {
    return (
        <div className="Header">
            <img src={logo} alt="Kathleen Stickel, Software Engineer"></img>
        </div>
    )
}