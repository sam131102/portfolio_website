import React from 'react';
import './App.css';

function IntroComponent() {
    return(
        <div className='intro-box'>
            <div className='name1'>
                <p>S</p>
                <p>A</p>
                <p>M</p>
                <p>B</p>
                <p>H</p>
                <p>A</p>
                <p>V</p>
            </div>
            <div className='name2'> 
                <p>G</p>
                <p>R</p>
                <p>A</p>
                <p>G</p>
            </div>
            <div className='box'>
                <p className='heading'>Welcome to my Portfolio</p>
                <p className='box-content'>Hi, I'm Sambhav Garg, a passionate software developer with a knack for creating innovative solutions. Explore my projects and get to know more about my journey and expertise.</p>
            </div>
            <img className='img' src={`${process.env.PUBLIC_URL}/sambhav.png`} alt="Sambhav Garg"/>
        </div>
        );
}

export default IntroComponent;