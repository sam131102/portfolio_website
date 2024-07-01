import React from 'react';
import './App.css';

function ContactComponent() {
    return(
    <div className='contact-section'>
        <img src={`${process.env.PUBLIC_URL}/BottomVector.svg`} alt="Wave Background" className="wave-background" />
        <div className='skills contact'>Contact Me</div>
    </div>
    );
}

export default ContactComponent;