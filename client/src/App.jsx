import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />

      <main>
        <h1>Premier Medical Hospital Portal</h1>

        <p>
          Welcome to our hospital website built with React.
        </p>
      </main>
    </>
  );
}

export default App;