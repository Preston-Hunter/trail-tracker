import { useEffect } from "react";
import { BrowserRouter, Route, NavLink} from "react-router-dom";


function NavBar({generateRandId, randId}){
    //todo clicking trail  details should show random trail

    
    return(<div>
    <NavLink to = "/">About</NavLink>
    <NavLink to = "/trails">View All Trails</NavLink>
    <NavLink to = "/Map">Map</NavLink>
    <NavLink to = "/Post">Post Trail</NavLink>
    <NavLink onClick={()=>{generateRandId()}} to = {`/trails/${randId}`}>View Trail Details</NavLink>
    </div>)
}

export default NavBar