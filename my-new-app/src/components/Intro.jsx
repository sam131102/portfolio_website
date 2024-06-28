import React from 'react';
import './App.css';
import SambhavImage from '../';

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
                <img className='.img' src='../Sambhav.png' alt="Sambhav Garg"/>
            </div>
        </div>
        );
}

export default IntroComponent;