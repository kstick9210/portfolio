import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className="Header">
            <div className="Header-image-wrapper">
                <div className="Header-overlay"></div>
                <img className="Header-image" src="../../assets/lynn-canyon.jpg" alt="Lynn Canyon, British Columbia"></img>
            </div>
            <h3>Well hello there. I'm Kathleen.<br></br>
            Thanks for stopping by.</h3>
        </div>
    )
}