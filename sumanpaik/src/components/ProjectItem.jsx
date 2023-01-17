import React, {useContext} from "react";
import {ThemeContext} from "../ThemeContext"

function ProjectItem({item}) {
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`project-container reveal ${theme ? "light" : "dark"}-theme`}>
          <div className={`leftp ${theme ? "light" : "dark"}-theme`}>
            <h1 className="number">{item.id}</h1>
            <p>{item.title}</p>
            <div className="element">
              { item.tech.one && <p className="one">{item.tech.one}</p>}
              { item.tech.two && <p className="two">{item.tech.two}</p>}
              { item.tech.three && <p className="three">{item.tech.three}</p>}
              { item.tech.four && <p className="four">{item.tech.four}</p>}
            </div>
            <div className="linkbtn">
              <button
                onClick={() => (window.location.href=`${item.github}`)}
                className="btnp"
              >
                GitHub
              </button>
              <button
                onClick={() => (window.location.href=`${item.live}`)}
                className="btnp"
              >
                Live Preview
              </button>
            </div>
          </div>
          <div className="rightp">
            <div className="hover-div">{item.responsive ? "Responsive" : "Only Desktop"}</div>
            <img
              src={item.imageurl}
              alt="screenshot"
              className="project-img"
              width="300px"
            />Name
          </div>
        </div>
    )
}
export default ProjectItem;