import React from 'react';
import './App.css';

function WorkComponent() {
    return(
        <>
        <div className='projects-section'>
            <img src={`${process.env.PUBLIC_URL}/wave.svg`} alt="Wave Background" className="wave-background" />
            <div className='skills'>Work Experience</div>
        </div>
        <div className='project-scroll'>
            <div className='skill-boxes'>
                <div className='project-icons'></div>
                <div className='project-icons'></div>
                <div className='project-icons'></div>
            </div>
            <div className='skill-boxes'>
                <div className='project'></div>
                <div className='project'></div>
                <div className='project'></div>
            </div>
        </div>
        </>
    );
}

export default WorkComponent;