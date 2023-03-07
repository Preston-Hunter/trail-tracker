import { useState } from "react"



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
        fetch("http://localhost:3000/trails", {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(formData)}).then(resp=>resp.json()).then(_=>{setTrails([...trails, {...formData, "id":_.id}])})
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder={"name"} onChange={(e)=>{setName(e.target.value)}}></input>
        <input type="number" placeholder={"length"} onChange={(e)=>{setLength(parseInt(e.target.value))}}></input>
        <input type="text" placeholder={"address"} onChange={(e)=>{setAddress(e.target.value)}}></input>
        <input type="text" placeholder={"difficulty"} onChange={(e)=>{setDif(e.target.value)}}></input>
        <input type="number" placeholder={"lattitude"} onChange={(e)=>{setLat(parseInt(e.target.value))}}></input>
        <input type="number" placeholder={"longitude"} onChange={(e)=>{setLong(parseInt(e.target.value))}}></input>
        <button type = "submit">Submit New Trail</button>
    </form>)
}

export default PostTrail;