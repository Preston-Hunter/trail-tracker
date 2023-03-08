import { BrowserRouter, Route, NavLink} from "react-router-dom";


function NavBar({trails}){
    //todo clicking trail  details should show random trail
    const randId = trails[Math.floor(Math.random*trails.length)]
    console.log(trails)
    return(<div>
    <NavLink to = "/">About</NavLink>
    <NavLink to = "/trails">View All Trails</NavLink>
    <NavLink to = "/Map">Map</NavLink>
    <NavLink to = "/Post">Post Trail</NavLink>
    <NavLink to = {`/trails/${1}`}>View Trail Details</NavLink>
    </div>)
}

export default NavBar