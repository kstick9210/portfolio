import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="Footer">
            <h1>Designed and engineered by Kathleen Stickel</h1>
            <div className="footer-icons">
                <a href="https://github.com/kstick9210" target="_blank" rel="noopener noreferrer">
                    <i className="social fab fa-github fa-2x" alt="GitHub"></i>
                </a>&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/kathleen-stickel/" target="_blank" rel="noopener noreferrer">
                    <i className="social fab fa-linkedin fa-2x" alt="LinkedIn"></i>
                </a>&nbsp;&nbsp;
                <a href="mailto:kath.stick@gmail.com">
                    <i className="social fal fa-at fa-2x"></i>
                </a>
            </div>
        </div>
    )
}
