import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function DisplayTrail(){
    const [isGoodId, setIsGoodId] = useState(false)
    const [displayedItem, setDisplayedItem] = useState()

    const idParam = useParams().id;

    function handleFetch(u){
        if(u!=0){
            fetch(`http://localhost:3000/trails/${u}`).then(resp=>{if (resp.ok){return resp.json()} else{return false}}).then(_=>{
                if (_===false){
                    setIsGoodId(false);
                    setDisplayedItem(null);
                }
            else{
                setDisplayedItem(_);
                setIsGoodId(true);
            }})
        }
    }


    useEffect(()=>{handleFetch(idParam)},[idParam])

        function difficultyToStars(d){
            switch (d){
                case "easy":
                    return "★☆☆";
                    break;
                case "medium": 
                    return "★★☆";
                    break;
                default:
                    return "★★★";
            }
        }

    if (!isGoodId){return <h2>Invalid Trail Id ({idParam}) or no Trail data in database</h2>}
    return (
    <div>
        <h1>{displayedItem.name}</h1>
        <h1>{displayedItem.length} miles</h1>
        <h1>Difficulty: {displayedItem.difficulty + difficultyToStars(displayedItem.difficulty)} </h1>
        <h1>Google Maps Address: {displayedItem.googleAddress}</h1>
        <h1>Lattitude/Longitude: {"("+displayedItem.lattitude + "," + displayedItem.longitude+")"}</h1>
    </div>)
}

export default DisplayTrail;