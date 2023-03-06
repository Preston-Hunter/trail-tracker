import { useEffect, useState } from "react";
import Trail from "./Trail"

function TrailList({setTrails, trails}){
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch("http://localhost:3000/trails").then(resp=>resp.json()).then(arr=>{setTrails(arr); setIsLoaded(true)})
    },[])

    if (!isLoaded) {return <h2>loading...</h2>}
    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Length</td>
                    <td>Difficulty</td>
                    <td>Address</td>
                    <td>Coordinates</td>
                </tr>
            </thead>
            <tbody>
            {trails.map((trail)=>{return <Trail key = {trail.id} name = {trail.name} lat = {trail.lattitude} long = {trail.longitude} length = {trail.length} dif = {trail.difficulty} address = {trail.googleAddress}></Trail>})}
            </tbody>
        </table>
    )    
}


export default TrailList;