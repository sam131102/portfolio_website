import './App.css';
import NavbarComponent from './Nav-bar';
import IntroComponent from './Intro'
import AboutComponent from './About';
import SkillsComponent from './Skills';
import ProjectsComponent from './Projects';
import WorkComponent from './WorkEx';
import ContactComponent from './Contact';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <IntroComponent />
      <section id="about"><AboutComponent /></section>
      <section id="skills"><SkillsComponent /></section>
      <section id="projects"><ProjectsComponent /></section>
      <section id="work-experience"><WorkComponent /></section>
      <section id="contact"><ContactComponent /></section>
    </div>
  );
}

export default App;