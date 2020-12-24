import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({name, icon, screenshot, description, deployedURL, ghURL}) {
    return (
        <div className="ProjectCard">
            <div className="project-title">
                <h2>
                    <a href={deployedURL} target="_blank" rel="noopener noreferrer">
                        {name}&nbsp;&nbsp;
                        <img src={icon} className="Project-icon" alt="Project Icon" />
                    </a>
                </h2>
            </div>
            <div className="project-screenshot-wrapper">   
                <img 
                    src={screenshot} 
                    alt="project screenshot"
                    className="project-screenshot"
                />
            </div>
            <div className="project-overlay">
                <div className="top-overlay"><p>{description}</p></div>
                <div className="bottom-overlay">
                    <p><a className="project-link" href={ghURL} target="_blank" rel="noopener noreferrer">See the code</a></p>
                    <p><a className="project-link" href={deployedURL} target="_blank" rel="noopener noreferrer">See the app</a></p>
                </div>
            </div>
        </div>
    )
}
