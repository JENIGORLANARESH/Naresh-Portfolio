
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Herosection/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skill.js";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Certification from "./components/Certification/Certification";
// import Email from "./components/Email/Email";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <About/>
      <Skills/>
      <Projects/>
      <Certification/>
      <Contact/>
      <Footer/> 
      {/* <Email/> */}
    </div>
  );
}

export default App;
