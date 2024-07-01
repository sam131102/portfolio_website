import React from 'react';
import './App.css';

function AboutComponent(){
    return(
        <div className='intro-box'>
            <div className='aboutme-box'>
                <div className='about-me'>ABOUT ME</div>
                <div className='box-content2'>I am Sambhav Garg, a recent graduate with a Bachelor of Arts in Computer Science from the University of British Columbia. With a strong foundation in software development, I specialize in JAVA, JavaScript, TypeScript, HTML/CSS, SASS, Bootstrap, Angular, PHP, SQL, and Python. My technical expertise extends to AWS services such as S3, Kinesis, and Cognito, as well as tools like Unity, Docker, and Apache.</div>
                <div className='box-content2'>I have demonstrated my skills through various hands-on projects, including a secure video-sharing app for doctors, a user-centric carpooling application, a Java-based simulation game, and a data science project analyzing FIFA player data and much more. I am passionate about applying my academic knowledge and practical experience in a professional setting to develop innovative solutions and drive technological advancement.</div>
            </div>
        </div>
    );
}

export default AboutComponent;