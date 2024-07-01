import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';

function NavbarComponent() {
    return (
      <div>
        <Navbar className='navbar'>
          <Nav className='nav'>
            <div className='menu'>
              <Nav.Link href="#about" className='nav-button'>About Me</Nav.Link>
              <Nav.Link href="#skills" className='nav-button'>Skills</Nav.Link>
              <Nav.Link href="#projects" className='nav-button'>Projects</Nav.Link>
              <Nav.Link href="#work-experience" className='nav-button'>Work Experience</Nav.Link>
              <Nav.Link href="#contact" className='nav-button'>Contact Me</Nav.Link>
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
