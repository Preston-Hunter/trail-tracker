import {NavLink} from "react-router-dom"

function Trail({name, lat, long, length, dif, address, id, setTrails, trails}){
    function handleDelete(){
        console.log(id)
        fetch(`http://localhost:3000/trails/${id}`, {
            method:"DELETE"
        }).then(resp=>resp.json()).then(_=>{setTrails(trails.filter((trail)=>{
            if(trail.id ===id){return false}
            return true
        }))})

    }

    return(
        <tr id = {id}>
            <td>
                <NavLink to={`${id}`}>{name}</NavLink>
            </td>
            <td>{length}</td>
            <td>{dif}</td>
            <td>{address}</td>
            <td>{"("+ lat + ", "+ long +")"}</td>
            <td><button onClick={handleDelete}>delete</button></td>
        </tr>

    )

}


export default Trail;