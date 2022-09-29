import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function NavBar(){
    return(
        <div className='navbar'>
            <NavLink className='navItem' to='/'>Reviews</NavLink>
            <NavLink className='navItem' to='/new-review'>+ Add Review</NavLink>
            <NavLink className='navItem' to='/your-favorites'>Your Favorites</NavLink>
        </div>
    )
}

export default NavBar