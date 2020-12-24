import React from "react";
import {Link} from "react-router-dom";
import "./Links.css";

export default function Links() {
    return (
        <div className="Links">
            <a href="https://github.com/kstick9210" target="_blank" rel="noopener noreferrer">
                <i className="social fab fa-github fa-2x" alt="GitHub Logo"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="triangles">
                <div className="up"><p><Link to="/about">About<br />Me</Link></p></div>
                <div className="down"><p><a href="#projects">Projects</a></p></div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/kathleen-stickel/" target="_blank" rel="noopener noreferrer">
                <i className="social fab fa-linkedin fa-2x" alt="LinkedIn Logo"></i>
            </a>
        </div>
    )
}
