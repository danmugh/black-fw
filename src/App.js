
import './App.css';
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import Hero from "./Hero";
import About from "./about";
import Band from "./Band";
import Gallery from "./Gallery";
import GallerySmallDevice from "./Gallery2";
import Videos from "./Videos";
import Testimony from "./Testimony";
import Lyrics from "./Lyrics";
import Contact from './Contact';
import News from "./News";


function App() {

    let gallery = (
        <Gallery />
    )

    if ( isMobile() ) {
        gallery = (
            <GallerySmallDevice />
        )
    }

  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <Hero />

      <About />
      <Band />

        { gallery }

      <Band />
      <Videos />
      <Band />

      <Testimony />

      <News />
      <Lyrics />
      {/*<Band />*/}

      <Contact />
      {/*<News />*/}
    </div>
  );
}

function isMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

export default App;
