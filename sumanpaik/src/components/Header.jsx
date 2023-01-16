import React, {useContext} from "react";
import {NavLink} from "react-router-dom"
import { ThemeContext } from "../ThemeContext";

function Header() {
    const {theme} = useContext(ThemeContext)
    
    return(
        <div className="header-container">
            <NavLink activeClassName="active" className={`header-nav-item ${theme}-theme`} to="/">Home</NavLink>
            <NavLink activeClassName="active" className={`header-nav-item ${theme}-theme`} to="/skill">Skills</NavLink>
            <NavLink activeClassName="active" className={`header-nav-item ${theme}-theme`} to="/project">Projects</NavLink>
            <NavLink activeClassName="active" className={`header-nav-item ${theme}-theme`} to="/contact">Contact</NavLink>
        </div>
    )
}
export default Header;