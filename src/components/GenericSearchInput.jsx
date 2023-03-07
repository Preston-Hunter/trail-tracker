



function GenericSearchInput({setSearchTerm, prompt}){
    return (
    <div>
        <input placeholder={"search " + prompt} id = {prompt} onChange={(e)=>setSearchTerm(e.target.value)}>
        </input>
    </div>)
}


export default GenericSearchInput
