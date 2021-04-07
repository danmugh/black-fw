
import './App.css';
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Hero from "./Hero";
import About from "./about";


function App() {
  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <Hero />
      <div className="pages__container" >
          <About />
      </div>

    </div>
  );
}

export default App;
