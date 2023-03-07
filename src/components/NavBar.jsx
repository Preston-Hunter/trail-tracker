import { BrowserRouter, Route, NavLink} from "react-router-dom";


function NavBar(){
    return(<div>
    <NavLink to = "/">Home</NavLink>
    <NavLink to = "/Map">Map</NavLink>
    <NavLink to = "/Post">Post Trail</NavLink>
    <NavLink to = "/TrailDetails">View Trails Details</NavLink>
    </div>)
}

export default NavBar