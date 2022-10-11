import React from "react";
import { NavLink } from "react-router-dom";

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