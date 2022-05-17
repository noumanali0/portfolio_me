import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import { Contact } from "./components/Footer";
import Education from "./components/Education";
import Skill from "./components/skills/Skill";
import ScrollButton from "./components/ScrollToTop";

function App() {
  return (
    <>
      <section id="">
        <NavBar />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="experience">
        <Education />
      </section>
      <section id="experience">
        <Skill />
      </section>

      <section id="experience">
        <Contact />
      </section>
      <ScrollButton />
    </>
  );
}

export default App;
