import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import './App.css';

function NavbarComponent() {
    return (
        <div>
            <Navbar className='navbar'>
                <Nav className='nav'>
                    <div className='menu'>
                        <ScrollLink to="about" smooth={true} duration={500} className='nav-button' activeClass="active" spy={true} hashSpy={true}>About Me</ScrollLink>
                        <ScrollLink to="skills" smooth={true} duration={500} className='nav-button' activeClass="active" spy={true} hashSpy={true}>Skills</ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500} className='nav-button' activeClass="active" spy={true} hashSpy={true}>Projects</ScrollLink>
                        <ScrollLink to="work-experience" smooth={true} duration={500} className='nav-button' activeClass="active" spy={true} hashSpy={true}>Work Experience</ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} className='nav-button' activeClass="active" spy={true} hashSpy={true}>Contact Me</ScrollLink>
                    </div>
                    <div className='nav-links'>
                        <Button href="/Sambhav_Garg_Resume.pdf" download="Sambhav_Garg_Resume" className='nav-button'>Resume</Button>
                        <Button href="https://github.com/sam131102" className='link'><FaGithub size={40}/></Button>
                        <Button href="https://www.linkedin.com/in/sambhav-garg-69862b149/" className='link'><FaLinkedin size={40}/></Button>
                    </div>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
