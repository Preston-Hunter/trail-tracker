

function Trail({name, lat, long, length, dif, address, id}){

    return(
        <tr>
            <td>{name}</td>
            <td>{length}</td>
            <td>{dif}</td>
            <td>{address}</td>
            <td>{"("+ lat + ", "+ long +")"}</td>
        </tr>

    )

}


export default Trail;