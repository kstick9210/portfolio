import React from 'react';
import './Skills.css';
import {TECH_SKILLS} from '../../constants/constants';

export default function Skills() {
    return (
        <div className="Skills">
            <h2>What I Can Do</h2>
            <hr></hr>
            <ul>
            {TECH_SKILLS.map(skill => 
                <li key={skill}>{skill}</li>
            )}
            </ul>
        </div>
    )
}
