import React, {useContext} from "react";
import {ThemeContext} from "../ThemeContext"

function Home(props) {
    const {theme} = useContext(ThemeContext)
  return (
    <div className="home-container">
      <div className={`left ${theme ? "light" : "dark"}-theme`}>
        <h1 className="left-h1">Suman <span className="left-h1-span">Paik</span></h1>
        <p className="left-p">
          I am Suman Paik. I am a web developer from India. I have an experience of close to more than two year in doing web development through creating projects and designing stuff. I’m fascinated by psychology and the mysteries of the human mind, drawing inspiration from what drives us.
        </p>
      </div>
      <div class={`card ${theme ? "light" : "dark"}-theme`}>
        <div class="imgBx">
          <img
            src={props.pic}
            alt="images"
          />
        </div>
        <div class="details">
          <h2>
            Suman Paik
            <br />
            <span>Web Developer</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Home;
