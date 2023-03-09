



function GenericSearchInput({setSearchTerm, prompt, defaultValue}){
    return (
    
        <input placeholder={"search " + prompt} id = {prompt} onChange={(e)=>{
            if(e.target.value===""){
                setSearchTerm(defaultValue)
            }
            else{setSearchTerm(e.target.value)}
            }}>
        </input>
    )
}


export default GenericSearchInput
