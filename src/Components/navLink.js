import { NavLink } from "react-router-dom";

export default function Navlink(){
    return(
        <nav>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'navLink')} to='/'>Home</NavLink> | 
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'navLink')} to='/search'> Search</NavLink> | 
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'navLink')} to='/favorites'> Favorites</NavLink>
        </nav>
    )
}