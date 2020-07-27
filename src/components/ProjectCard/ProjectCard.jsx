import React from 'react';
import './ProjectCard.css';

export default function ProjectCard(props) {
    return (
        <div className="ProjectCard">
            <h3>{props.name} <img src={props.icon} className="Project-icon" alt="Project Icon"></img></h3>
            <div
                className="ProjectCard-image"
                style={{ 
                    backgroundImage: `url(${props.screenshot})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: 500,
                    width: "inherit"
                }}
            >   
            </div>
            <p className="Project-description">{props.description}</p>
            <div className="Project-links">
                <a href={props.deployedURL} target="_blank" rel="noopener noreferrer">
                    Check Out the App <img src={props.icon} className="Project-icon" alt="Project Icon"></img>
                </a><br></br>
                <a href={props.ghURL} target="_blank" rel="noopener noreferrer">
                    See the Project on GitHub <img src="https://i.imgur.com/71WSpc0.png" alt="GitHub Icon"></img>
                </a><br></br>
            </div>
        </div>
    )
}
