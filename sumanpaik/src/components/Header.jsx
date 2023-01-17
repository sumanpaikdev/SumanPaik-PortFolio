import React, {useContext} from "react";
import {NavLink} from "react-router-dom"
import { ThemeContext } from "../ThemeContext";

function Header() {
    const {theme} = useContext(ThemeContext)
    
    return(
        <div className={`header-container ${theme ? "light" : "dark"}-theme`}>
            <NavLink activeClassName="active" className={`header-nav-item ${theme ? "light" : "dark"}-theme`} to="/">Home</NavLink>
            <NavLink activeClassName="active" className={`header-nav-item ${theme ? "light" : "dark"}-theme`} to="/skill">Skills</NavLink>
            <NavLink activeClassName="active" className={`header-nav-item ${theme ? "light" : "dark"}-theme`} to="/project">Projects</NavLink>
            <NavLink activeClassName="active" className={`header-nav-item ${theme ? "light" : "dark"}-theme`} to="/contact">Contact</NavLink>
        </div>
    )
}
export default Header;