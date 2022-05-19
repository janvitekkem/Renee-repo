import React, {useState} from 'react';
import {Menu} from './Menu';
import "./cssfiles/Navbar.css";
import {NavLink} from 'react-router-dom';

const Navbar=() => {

    const [clicked,setClicked]=useState(false);

    const menu = Menu.map(({ url,title}) =>{
        return(
            <li>
                <NavLink exact to={url} activeClassName="active"> {title} </NavLink>
            </li>
        );
    });
    const handleClick=()=>{
        setClicked(!clicked); 
    }
    return  (
        <nav>
            <div className="logo">
             Re<font>nee</font>
            </div>

            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            
            <ul className={clicked ? "menu-css" : "menu-css close"}>{menu}</ul>
        </nav>


    );
};

export default Navbar;
