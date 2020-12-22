import React from "react";
import "./Links.css";

export default function Links() {
    return (
        <div className="Links">
            <a href="https://www.linkedin.com/in/kathleen-stickel/" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.imgur.com/XugcbSX.png" className="social-icon" id="li" alt="LinkedIn Logo"></img>
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="triangles">
                <div className="up"><p>About<br />Me</p></div>
                <div className="down"><p>My Projects</p></div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/kstick9210" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.imgur.com/71WSpc0.png" className="social-icon" alt="GitHub Logo"></img>
            </a>
        </div>
    )
}
