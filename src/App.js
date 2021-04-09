
import './App.css';
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Hero from "./Hero";
import About from "./about";
import Band from "./Band";
import Gallery from "./Gallery";


function App() {
  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <Hero />

      <About />
      <Band />

      <Gallery />
    </div>
  );
}

export default App;
