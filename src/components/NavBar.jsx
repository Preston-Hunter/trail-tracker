import { useEffect } from "react";
import { BrowserRouter, Route, NavLink} from "react-router-dom";


function NavBar({generateRandId, randId}){
    //syncornize backend and front end randomization. there is a small delay between sync
    
    return(
    <div id = "nav-bar">
        <NavLink to = "/">About</NavLink>
        <NavLink to = "/trails">View All Trails</NavLink>
        <NavLink to = "/Map">Map</NavLink>
        <NavLink to = "/Post">Post Trail</NavLink>
        <NavLink onClick={()=>{generateRandId()}} to = {`/trails/${randId}`}>View Random Trail Details</NavLink>
    </div>)
}

export default NavBar