import React from 'react';
import './ScrollDownArrow.css';

export default function ScrollDownArrow() {
    return (
        <div className="chevron-wrapper">
            <div className="container">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
                <span className="text">scroll down</span>
            </div>
        </div>
    )
}
