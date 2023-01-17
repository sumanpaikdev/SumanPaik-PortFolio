import React, {useContext} from "react";
import { ThemeContext } from "../ThemeContext";

function Contact({gmail, twitter, github, linkedin, youtube}) {
    const {theme} = useContext(ThemeContext)
    return(
        <div className={`contact-container ${theme ? "light" : "dark"}-theme`}>
            <ul className="contact-ul">
                <li className="ul-li"><a href="mailto:sumanpaik.dev@gmail.com" className={`social ${theme ? "dark" : "light"}-theme`}> <img className="social-img" src={gmail} /> Gmail</a></li>
                <li className="ul-li"><a href="https://twitter.com/sumanpaikdev" className={`social ${theme ? "dark" : "light"}-theme`}> <img className="social-img" src={twitter} /> Twitter</a></li>
                <li className="ul-li"><a href="https://github.com/sumanpaikdev" className={`social ${theme ? "dark" : "light"}-theme`}> <img className="social-img" src={github} /> GitHub</a></li>
                <li className="ul-li"><a href="https://www.linkedin.com/in/suman-paik-21a2b5213/" className={`social ${theme ? "dark" : "light"}-theme`}> <img className="social-img" src={linkedin} /> Linkedin</a></li>
                <li className="ul-li"><a href="https://www.youtube.com/channel/UCR_xSSXs7j5luzlMWfgdvUw" className={`social ${theme ? "dark" : "light"}-theme`}> <img className="social-img" src={youtube} /> YouTube</a></li>
            </ul>
        </div>
    )
}
export default Contact;