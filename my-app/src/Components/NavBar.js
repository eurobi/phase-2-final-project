import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function NavBar(){
    return(
        <div className='navbar'>
            <NavLink className='navItem' to='/'>Reviews</NavLink>
            <NavLink className='navItem' to='/'>Add Review</NavLink>
        </div>
    )
}

export default NavBar