import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="About">
            <h2>Who I Am</h2>
            <hr></hr>
            I'm Kathleen Stickel. I am a detail-oriented and efficiency-minded software engineer based in Dallas, Texas who 
            is highly motivated to overcome obstacles to achieve exceptional results. My experiences as 
            a math tutor for high school students as well as a project leader in the federal government 
            have refined my communication skills and given me a thirst for problem solving. Whether I’m 
            conducting an intelligence briefing or assisting a team with server-side debugging, I know 
            how to assess a problem from any angle and communicate it concisely.<br></br><br></br>
            <div>
                Where to find me around the web:<br></br><br></br>
                <a href="https://www.linkedin.com/in/kathleen-stickel/" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.imgur.com/5YPzVDK.png" className="social-icon" alt="LinkedIn Logo"></img>
                </a><br></br>
                <a href="https://github.com/kstick9210" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.imgur.com/3J01ITc.png" className="social-icon" alt="GitHub Logo"></img>
                </a>
            </div>
        </div>
    )
}
