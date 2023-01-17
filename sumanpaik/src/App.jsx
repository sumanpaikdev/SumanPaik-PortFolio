import React, { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

//component
import Header from "./components/Header";

//pages
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

//images
import Suman from "./assets/suman.jpg";
import sunL from "./assets/sunL.png";
import sunD from "./assets/sunD.png";
import Gmail from "./assets/gmail.png";
import Twitter from "./assets/twitter.png";
import GitHub from "./assets/github.png";
import Linkedin from "./assets/linkedin.png";
import YouTube from "./assets/youtube.png";

function App() {
  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <div className={`app-container ${theme ? "light" : "dark"}-theme`}>
      <Header />

      <Routes>
        <Route path="/" element={<Home pic={Suman} />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Projects />} />
        <Route
          path="/contact"
          element={
            <Contact
              gmail={Gmail}
              twitter={Twitter}
              github={GitHub}
              linkedin={Linkedin}
              youtube={YouTube}
            />
          }
        />
      </Routes>

      <button onClick={switchTheme} className="theme-btn">
        <img src={theme ? sunD : sunL} alt="mode" className="theme-btn-image" />
      </button>
    </div>
  );
}
export default App;
