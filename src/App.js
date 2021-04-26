
import './App.css';
import Navbar from "./Pages/Menu/Navbar";
import SocialMedia from "./UI/SocialMedia";
import Hero from "./Pages/Home/Hero";
import About from "./Pages/About/about";
import Band from "./Pages/Band/Band";
import Gallery from "./Pages/Gallery/Gallery";
import GallerySmallDevice from "./Pages/Gallery/Gallery2";
import Videos from "./Pages/Videos/Videos";
import Testimony from "./Pages/Testimony/Testimony";
import Lyrics from "./Pages/Lyrics/Lyrics";
import Contact from './Pages/Contact/Contact';
import News from "./Pages/News/News";
import App_Player from "./Player/App_Player";


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

        <App_Player />
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
