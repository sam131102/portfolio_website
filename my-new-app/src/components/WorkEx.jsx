import React from 'react';
import './App.css';

function WorkComponent() {
    return(
        <>
        <div className='projects-section'>
            <img src={`${process.env.PUBLIC_URL}/wave.svg`} alt="Wave Background" className="wave-background" />
            <div className='skill'>Work Experience</div>
        </div>
        <div className='project-scroll'>
            
        </div>
        </>
    );
}

export default WorkComponent;