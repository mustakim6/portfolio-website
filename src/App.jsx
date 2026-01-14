import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import About from './sections/About';

function App() {
  return (
    <>
      {/* header section start */}
      <header>
        <Navbar></Navbar>
      </header>
      {/* header section end */}

      {/* Main section start */}
      <main>
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
