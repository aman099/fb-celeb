import "./App.css";

import Video from "./components/Video/Video";
import Navigation from "./components/Navigation-section/Navigation";
import Head from "./components/Head-section/Head";
import About from "./components/About-section/About";
import Celebration from "./components/Celebration-section/Celebration";
// import Sidemenu from "./components/Sidemenu/Sidemenu";
import Joined from "./components/Joined/Joined";
import Expertise from "./components/Expertise-section/Expertise";
import Footprints from "./components/Footprints-section/Footprints";
import Media from "./components/Media-section/Media";
import Chat from "./components/Chat-section/Chat";
import SocialMedia from "./components/Social-Media-section/SocialMedia";
import Follow from "./components/Follow-section/Follow";
import Footer from "./components/Footer-section/Footer";

function App() {
  return (
    <div className="App">
      {/* Video */}
      <Video />

      {/* Navigation-section */}
      <Navigation />
      {/* Menu Popup */}
      {/* <Sidemenu /> */}
      {/* Head section */}
      <Head />

      {/* About section */}
      <About />

      {/* Celebration section */}
      <Celebration />

      {/* Joined section */}
      <Joined />

      {/* Expertise section */}
      <Expertise />

      {/* Footprints section */}
      <Footprints />

      {/* Media section */}
      <Media />

      {/* Chat section */}
      <Chat />

      {/* Grid Social Media section */}
      <SocialMedia />

      {/* Follow section */}
      <Follow />

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
