import React from "react";
import {Link} from "react-router-dom";
import "./About.css";

import Skills from "../../components/Skills/Skills";
import logo from "../../assets/images/portfolio_logo_no_text.png";
import CWDLogo from "../../assets/images/CWD_Logo.png";

export default function About() {
    return (
        <div className="About">
            <img src={logo} alt="portfolio logo"/>
            <div className="about-wrapper">
                <h4>
                    <Link to="/" className="home-link">
                        <i className="fad fa-chevron-double-left"></i> Return to Home
                    </Link>
                </h4>
                <h1>About Me</h1>
                <div className="line" id="about-line"></div>
                <h2>Hey there, I'm Kathleen Stickel</h2>
                I am a detail-oriented and efficiency-minded software engineer based in Dallas, Texas who 
                is highly motivated to overcome obstacles to achieve exceptional results. My experiences as 
                a teaching assistant for software engineering students as well as a project leader in the federal government 
                have refined my communication skills and given me a thirst for problem solving. Whether I’m 
                conducting an intelligence briefing or assisting a team with server-side debugging, I know 
                how to assess a problem from any angle and communicate it concisely.<br />
                <Skills />
                <div className="about-icons">
                    Where to connect with me:&nbsp;&nbsp;
                    <a href="https://github.com/kstick9210" target="_blank" rel="noopener noreferrer">
                        <i className="social fab fa-github fa-2x" alt="GitHub"></i>
                    </a>&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/kathleen-stickel/" target="_blank" rel="noopener noreferrer">
                        <i className="social fab fa-linkedin fa-2x" alt="LinkedIn"></i>
                    </a>&nbsp;&nbsp;
                    <a href="mailto:kath.stick@gmail.com">
                        <i className="social fal fa-at fa-2x"></i>
                    </a>
                </div><br /><br />
                Currently I am working as co-owner and lead front end developer at Cinque Web Development 
                (pronounced SINK-<span className="long-a">a&#772;</span>). I work with a team of experienced
                developers to build websites, passion projects, and mobile applications. Connect with us to 
                learn how we can advance your next project.<br /><br />
                <div className="about-icons">
                    Where to connect with Cinque:&nbsp;&nbsp;
                    <a href="https://www.cinquewd.com/" target="_blank" rel="noopener noreferrer" id="cwd-link">
                        <img className="cwd-logo" src={CWDLogo} alt="CWD Logo"/>
                    </a>&nbsp;&nbsp;
                    <a href="https://github.com/Cinque-Web-Development" target="_blank" rel="noopener noreferrer">
                        <i className="social fab fa-github fa-2x"></i>
                    </a>&nbsp;&nbsp;
                    <a href="https://twitter.com/cinquewebdev" target="_blank" rel="noopener noreferrer">
                        <i className="social fab fa-twitter fa-2x"></i>
                    </a>&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/company/cinque-web-dev" target="_blank" rel="noopener noreferrer">
                        <i className="social fab fa-linkedin fa-2x"></i>
                    </a>&nbsp;&nbsp;
                    <a href="mailto:cinquewebdev@gmail.com">
                        <i className="social fal fa-at fa-2x"></i>
                    </a>
                </div><br /><br />
                <div className="line" id="about-line"></div>
            </div>
        </div>
    )
}
