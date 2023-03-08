import { BrowserRouter, Route, NavLink} from "react-router-dom";


function NavBar(){
    //todo clicking trail  details should show random trail
    return(<div>
    <NavLink to = "/">About</NavLink>
    <NavLink to = "/trails">View All Trails</NavLink>
    <NavLink to = "/Map">Map</NavLink>
    <NavLink to = "/Post">Post Trail</NavLink>
    <NavLink to = "/trails/1">View Trail Details</NavLink>
    </div>)
}

export default NavBar