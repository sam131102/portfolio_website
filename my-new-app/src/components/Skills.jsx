import React from 'react';
import './App.css';

function SkillsComponent() {
    return(
        <>
        <div className='skills-section'>
            <img src={`${process.env.PUBLIC_URL}/wave.svg`} alt="Wave Background" className="wave-background" />
            <div className='skill'>SKILLS</div>
        </div>
        <div className='skill-boxes'>
            <div className='skill-box'> 
                <div className='skill-heading'>Programming Languages & Frameworks</div>
                <div className='skills'>Java</div>
                <div className='skills'>JavaScript</div>
                <div className='skills'>TypeScript</div>
                <div className='skills'>Python</div>
                <div className='skills'>HTML</div>
                <div className='skills'>CSS</div>
                <div className='skills'>PHP</div>
                <div className='skills'>SQL</div>
                <div className='skills'>SASS</div>
                <div className='skills'>BootStrap</div>
            </div>
            <div className='skill-box'>
             <div className='skill-heading'>Software Tools</div>
             <div className='skills'>Unity</div>
             <div className='skills'>Docker</div>
             <div className='skills'>Git</div>
             <div className='skills'>Android Studio</div>
             <div className='skills'>AWS S3</div>
             <div className='skills'>AWS Kinesis</div>
             <div className='skills'>AWS Rekognition</div>
             <div className='skills'>AWS Cognito</div>
             <div className='skills'>Unity</div>
             <div className='skills'>Apache</div>
            </div>
            <div className='skill-box'>
                <div className='skill-heading'>Soft Skills</div>
                <div className='skills'>Problem Solving</div>
                <div className='skills'>Communication</div>
                <div className='skills'>Creativity</div>
                <div className='skills'>Adaptability</div>
                <div className='skills'>Customer Service</div>
                <div className='skills'>Sales</div>
            </div>
        </div>
        </>
    );
}

export default SkillsComponent;