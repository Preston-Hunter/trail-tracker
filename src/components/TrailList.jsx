import { useEffect, useState } from "react";
import Trail from "./Trail"

function TrailList({setTrails, trails, searchLengthLower, searchLengthHigher, searchDifficulty, searchName, searchAddress, isLoaded}){

    let filteredTrails = [...trails]

    filteredTrails = filteredTrails.filter((trail)=>{
        if (!(trail.name.includes(searchName))){return false}
        if (!(trail.difficulty.includes(searchDifficulty))){return false}
        if (!(trail.googleAddress.includes(searchAddress))){return false}
        if (!(trail.length >= searchLengthLower)){return false}
        if (!(trail.length <= searchLengthHigher)){return false}
        return true;
    })

    
    
    if (!isLoaded) {return <h2>loading...</h2>}
    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Length (miles)</td>
                    <td>Difficulty</td>
                    <td>Address</td>
                    <td>Coordinates</td>
                    <td>Delete Button</td>
                </tr>
            </thead>
            <tbody>
            {filteredTrails.map((trail)=>{return <Trail id = {trail.id} trails={trails} setTrails={setTrails} key = {trail.id} name = {trail.name} lat = {trail.lattitude} long = {trail.longitude} length = {trail.length} dif = {trail.difficulty} address = {trail.googleAddress}></Trail>})}
            </tbody>
        </table>
    )    
}


export default TrailList;