
import './App.css';
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Hero from "./Hero";
import About from "./about";
import Band from "./Band";


function App() {
  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <Hero />

      <About />
      <Band />

    </div>
  );
}

export default App;
