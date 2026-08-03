import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

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