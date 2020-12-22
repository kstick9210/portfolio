import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({name, icon, screenshot, description, deployedURL, ghURL}) {
    return (
        <div className="ProjectCard">
            <h3>{name} <img src={icon} className="Project-icon" alt="Project Icon"></img></h3>
            <div className="ProjectCard-image">   
                <img 
                    src={screenshot} 
                    alt="project screenshot"
                    className="project-screenshot"
                    />
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
