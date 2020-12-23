import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({name, icon, screenshot, description, deployedURL, ghURL}) {
    return (
        <div className="ProjectCard">
            <h2 className="project-title">{name} <img src={icon} className="Project-icon" alt="Project Icon"></img></h2>
            <div className="project-screenshot-wrapper">   
                <img 
                    src={screenshot} 
                    alt="project screenshot"
                    className="project-screenshot"
                />
            </div>
            <div className="project-overlay">
                <div className="top-overlay"><p><a className="project-link" href={deployedURL} target="_blank">See the app</a></p></div>
                <div className="bottom-overlay"><p><a className="project-link" href={ghURL} target="_blank">See the code</a></p></div>
            </div>
            {/* <p className="Project-description">{description}</p>
            <div className="Project-links">
                <a href={deployedURL} target="_blank" rel="noopener noreferrer">
                    Check Out the App <img src={icon} className="Project-icon" alt="Project Icon"></img>
                </a><br></br>
                <a href={ghURL} target="_blank" rel="noopener noreferrer">
                    See the Project on GitHub <img src="https://i.imgur.com/71WSpc0.png" alt="GitHub Icon"></img>
                </a><br></br>
            </div> */}
        </div>
    )
}
