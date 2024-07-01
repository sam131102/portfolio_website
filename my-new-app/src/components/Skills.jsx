import React from 'react';
import './App.css';

function SkillsComponent() {
    return(
        <>
        <div className='skills-section'>
            <img src={`${process.env.PUBLIC_URL}/wave.svg`} alt="Wave Background" className="wave-background" />
            <div className='skills'>SKILLS</div>
        </div>
        <div className='skill-boxes'>
            <div className='skill-box'> 
                <div className='skill-heading'>Programming Languages & Frameworks</div>
            </div>
            <div className='skill-box'>
             <div className='skill-heading'>Software Tools</div>
            </div>
            <div className='skill-box'>
                <div className='skill-heading'>Soft Skills</div>
            </div>
        </div>
        </>
    );
}

export default SkillsComponent;