import React, {useContext} from "react";
import {ThemeContext} from "../ThemeContext"

function Home(props) {
    const {theme} = useContext(ThemeContext)
  return (
    <div className="home-container">
      <div className={`left ${theme ? "light" : "dark"}-theme`}>
        <h1 className="left-h1">Suman <span className="left-h1-span">Paik</span></h1>
        <p className="left-p">
          Hello! my name is Suman Paik. I’m a Web developer. I am able to create
          front-end web apps that work fine across all platforms. I care deeply
          about building interfaces that are actually usable. I’m 22 years old
          and excited to start my career as a Web developer. In the year 2022, I
          have finished my Bachelor of Computer Application degree. And now I am
          continuously learning new stuff.
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
            <span>Frontend Web Developer</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Home;
