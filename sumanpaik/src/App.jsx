import React, {useContext} from "react";
import "./App.css"
import {Routes, Route} from "react-router-dom"
import { ThemeContext } from "./ThemeContext";

//component
import Header from "./components/Header";

//pages
import Home from "./pages/Home"
import Skill from "./pages/Skill"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

//images
import Suman from "./assets/suman.jpg"

function App() {
  const {theme} = useContext(ThemeContext)
  return(
    <div className={`app-container ${theme}-theme`}>
      <Header/>

      <Routes>
        <Route path="/" element={<Home pic={Suman}/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}
export default App;
