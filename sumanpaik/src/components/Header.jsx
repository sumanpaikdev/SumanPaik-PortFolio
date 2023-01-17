import React, {useContext} from "react";
import {NavLink} from "react-router-dom"
import { ThemeContext } from "../ThemeContext";
import data from "../Data/Projects.json"

function Header() {
    const {theme} = useContext(ThemeContext)
    
    return(
        <div className={`header-container ${theme ? "light" : "dark"}-theme`}>
            <NavLink  className={`${({isActive}) => (isActive ? "active" : "")} header-nav-item ${theme ? "light" : "dark"}-theme`} to="/">Home</NavLink>
            <NavLink  className={`${({isActive}) => (isActive ? "active" : "")} header-nav-item ${theme ? "light" : "dark"}-theme`} to="/skill">Skills</NavLink>
            <NavLink  className={`${({isActive}) => (isActive ? "active" : "")} header-nav-item ${theme ? "light" : "dark"}-theme`} to="/project">Projects <div className="count-project">{data.length}</div></NavLink>
            <NavLink  className={`${({isActive}) => (isActive ? "active" : "")} header-nav-item ${theme ? "light" : "dark"}-theme`} to="/contact">Contact</NavLink>
            
        </div>
    )
}
export default Header;