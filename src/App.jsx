import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      {/* Navbar section start */} 
        <Navbar></Navbar>
      {/* Navbar section end */}

      {/* Main section start */}
      <main >
        {/* hero section contain 1st part of the webpage start here */}
        <section>
          <Hero></Hero>
        </section>
        {/* hero section end */}

        {/* about section contain 2nd part of the webpage start here */}
          <section>
            <About></About>
          </section>
        {/* about section end here */}

        {/* Skills section contain 3rd part of the webpage start here */}
          <section>
            <Skills></Skills>
          </section>
        {/* Skills section end here */}

        {/* Projects section contain 4th part of the webpage start here */}
          <section>
            <Projects></Projects>
          </section>
        {/* Projects section end here */}

        {/* Education section contain 5th part of the webpage start here */}
          <section>
            <Education></Education>
          </section>
        {/* Education section end here */}

        {/* Contact section contain 6th part of the webpage start here */}
          <section>
            <Contact></Contact>
          </section>
        {/* Contact section end here */}


      </main>
      {/* Main section end */}

      {/* Footer section start */}
      <footer>
        <Footer></Footer>
      </footer>
      {/* Footer section end */}
    </>
  );
}

export default App;
