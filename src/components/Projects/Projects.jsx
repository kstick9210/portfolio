import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import {PROJECTS} from '../../constants/constants';

export default function Projects() {
    return (
            <div className="ProjectCard-wrapper">
                {PROJECTS.map((project, idx) => 
                    <ProjectCard 
                        key={idx}
                        name={project.name}
                        deployedURL={project.deployedURL}
                        ghURL={project.ghURL}
                        description={project.description}
                        screenshot={project.screenshot}
                        icon={project.icon}
                    />

                )}
            </div>
    )
}
