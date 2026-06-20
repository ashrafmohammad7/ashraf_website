import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CurrentlyBuilding />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;