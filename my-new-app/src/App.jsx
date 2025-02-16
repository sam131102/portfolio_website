import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={`${process.env.PUBLIC_URL}/vid.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="navbar">
          <div className="logo">Sambhav Garg</div>
          <a href={`${process.env.PUBLIC_URL}/Sambhav_Garg_Resume.pdf`} download="Sambhav_Garg_Resume" className="resume-button">Download Resume</a>
        </div>
        <div className="main-content-container">
          <div className="main-content">
            <div className="profile-card">
              <img
                src={`${process.env.PUBLIC_URL}/sambhav.png`}
                alt="Profile Picture"
                className="profile-pic"
              />
              <h2>Sambhav Garg</h2>
              <h3>Lead Software Developer | Freelance Web Developer</h3>
              <h4>Turning caffeine into code, I build solutions one line at a time.</h4>
            </div>
            <div className="card about-me-card">
              <div className="card-header">
                <h2>About Me</h2>
              </div>
              <p>I am a Computer Science graduate from the University of British Columbia, currently residing in Kelowna, BC. I have a strong passion for developing software that solves real-world problems and enhances user experiences. Beyond coding, I enjoy hiking in the beautiful landscapes of British Columbia. I am eager to apply my knowledge and skills in a professional setting, contributing to innovative projects and continuous growth as a developer.</p>
              <div className="education">
                <h3>Education</h3>
                <p>University of British Columbia (UBC) - Bachelors of Art (Computer Science)</p>
                <p>(2020-2024)</p>
              </div>
            </div>
            <div className="card project-card">
              <div className="card-header">
                <h2>Projects</h2>
              </div>
              <div className="projects-grid">
                <a href="https://github.com/sam131102/PRVCY_APP" className="project-icon" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/prvcy.png`} alt="PRVCY" />
                </a>
                <a href="https://github.com/sam131102/Carpooling-App-HCI" className="project-icon" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/carpool.png`} alt="Carpool" />
                </a>
                <a href="https://karrentals.ca" className="project-icon" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/logo_enhanced.jpg`} alt="KAR" />
                </a>
                <a href="https://github.com/sam131102?tab=repositories" className="project-icon" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/app.png`} alt="App" />
                </a>
              </div>
            </div>
            <div className="card work-experience-card">
              <div className="card-header">
                <h2>Work Experience</h2>
              </div>
              <div className="experience-timeline">
                <div className="experience-box">
                    <h3>Lead Software Developer & Founding Member</h3>
                    <p>Curious Markings</p>
                    <p>Nov 2024 - Present</p>
                    <p className="description">Lead Software Developer at Curious Markings Co., specializing in building intuitive, no-code/low-code platforms like AppSage and MacroSage. Experienced in full-stack development with Ruby, JavaScript, HTML, CSS, and AI-driven solutions using GPT. Passionate about creating scalable, user-friendly applications that empower individuals to design and manage their own digital experiences.</p>
                </div>
                <div className="experience-box">
                    <h3>Rental Agent</h3>
                    <p>Kelowna Boat Rentals</p>
                    <p>May 2023 - Sept 2023</p>
                    <p className="description">Rental Agent with Kelowna Boat Rentals, sales & customer service, maintenance, collection of rental fees and deposits, safety & Training</p>
                </div>
                <div className="experience-box">
                    <h3>Merchandiser</h3>
                    <p>Costco Wholesale</p>
                    <p>June 2022 - Nov 2022</p>
                    <p className="description">Merchandiser Costco, customer interactions, inventory and stocking, sales consulting for tires</p>
                </div>
                <div className="experience-box">
                  <h3>Tech Advisor</h3>
                  <p>Best Buy</p>
                  <p>Sept 2021 - Dec 2021</p>
                  <p className="description">Best Buy Advisor, sales, customer service, POS system training, training customers on technology solutions</p>
                </div>
                <div className="experience-box">
                  <h3>Contract Software Developer</h3>
                  <p>Satya International</p>
                  <p>Aug 2019 - May 2020</p>
                  <p className="description">Applied JAVA, SQL and PHP skills to develop an inventory management system for a local import company to manage stock and clients. The software was custom built and deployed for the business on local devices.</p>
                </div>
                <div className="experience-box">
                  <h3>Student Intern</h3>
                  <p>C.R.I.S</p>
                  <p>July 2019 - Aug 2019</p>
                  <p className="description">Shadowed staff and learned advanced work such as using excel sheet modules for projecting utilization of mobile assets and development of asset utilization for Zonal Railways</p>
                </div>
              </div>
            </div>
            <div className="card skills-card">
              <div className="card-header">
                <h2>Skills</h2>
              </div>
              <ul className="skills-list">
                <li>JAVA</li>
                <li>Problem Solving</li>
                <li>Python</li>
                <li>Teamwork</li>
                <li>TypeScript</li>
                <li>Adaptability</li>
                <li>SQL</li>
                <li>Creativity</li>
                <li>HTML/CSS</li>
                <li>Communication</li>
                <li>AWS</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>Angular</li>
                <li>React</li>
                <li>Docker</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>Unity</li>
                <li>Apache</li>
                <li>BootStrap</li>
                <li>SASS</li>
                <li>WebGL</li>
              </ul>
            </div>
            <div className="card contact-card">
              <div className="card-header">
                <h2>Contact Me</h2>
              </div>
              <div className="contact-boxes">
                <div className="contact-box email-box">
                  <a href="mailto:sambhavgarg2002@gmail.com"><img src={`${process.env.PUBLIC_URL}/apple.png`} alt="Email Icon" className="contact-icon" /></a>
                </div>
                <div className="contact-box linkedin-box">
                  <a href="https://www.linkedin.com/in/sambhav-garg-69862b149/"> <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn Icon" className="contact-icon" /></a>
                </div>
                <div className="contact-box github-box">
                  <a href="https://github.com/sam131102"><img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub Icon" className="contact-icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
