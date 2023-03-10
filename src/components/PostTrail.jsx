import { useState } from "react"
import {NavLink} from  "react-router-dom";


function PostTrail({trails, setTrails}){
    const [name, setName] = useState("")
    const [dif, setDif] = useState("")
    const [length, setLength] = useState(0)
    const [address, setAddress] = useState("")
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)

    const formData = {
        "name":`${name}`,
        "difficulty":`${dif}`,
        "googleAddress":`${address}`,
        "length":length,
        "lattitude":lat,
        "longitude":long
    }


    function handleSubmit(e){
        e.preventDefault()
        console.log("posted")
        fetch("http://localhost:3000/trails", {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(formData)}).then(resp=>resp.json()).then(_=>{setTrails([...trails, {...formData, "id":_.id}])})
    }

    return (
    <form id = "submit-form">
        <input type="text" placeholder={"name"} onChange={(e)=>{setName(e.target.value)}}></input>
        <input type="number" placeholder={"length"} onChange={(e)=>{setLength(parseInt(e.target.value))}}></input>
        <input type="text" placeholder={"address"} onChange={(e)=>{setAddress(e.target.value)}}></input>
        <input type="text" placeholder={"difficulty"} onChange={(e)=>{setDif(e.target.value)}}></input>
        <input type="number" placeholder={"lattitude"} onChange={(e)=>{setLat(parseFloat(e.target.value))}}></input>
        <input type="number" placeholder={"longitude"} onChange={(e)=>{setLong(parseFloat(e.target.value))}}></input>
        <NavLink to = "../">        
            <button id="submit-button" type = "submit" onClick={handleSubmit}>Submit New Trail</button>
        </NavLink>
    </form>)
}

export default PostTrail;