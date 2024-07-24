import React from 'react';
import './App.css';

function ProjectsComponent() {
    return(
        <>
        <div className='projects-section'>
            <img src={`${process.env.PUBLIC_URL}/wave.svg`} alt="Wave Background" className="wave-background flipped" />
            <div className='skill'>PROJECTS</div>
        </div>
        <div className='project-scroll'>
            <div className='skill-boxes'>
                <img className='img-project' src={`${process.env.PUBLIC_URL}/prvcy.png`} alt="PRVCY App"/>
                <img className='img-project' src={`${process.env.PUBLIC_URL}/carpool.png`} alt="Carpooling App"/>
                <img className='img-project' src={`${process.env.PUBLIC_URL}/fifa.png`} alt="FIFA"/>
            </div>
        </div>
        </>
    );
}

export default ProjectsComponent;