import React, {useContext} from "react"
import { ThemeContext } from "../ThemeContext";

function SkillLogo(props) {
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`skill-logo ${theme ? "light" : "dark"}-theme`}>
            <img src={props.myskill.logo} alt={props.myskill.title} className="skill-icon" />
            <p className="skill-name">{props.myskill.title}</p>
        </div>
    )
}
export default SkillLogo;