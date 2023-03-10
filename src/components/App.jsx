import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import DisplayTrail from './DisplayTrail'
import TrailList from "./TrailList"
import NavBar from "./NavBar"
import SearchBar from './SearchBar'
import PostTrail from './PostTrail'
import {Route, Routes, useLocation } from "react-router-dom"
import About from "./About"
import Map from "./Map"
import { useEffect } from 'react'

function App() {
  const [searchName, setSearchName] = useState("")
  const [searchDifficulty, setSearchDifficulty] = useState("")
  const [searchAddress, setSearchAddress] = useState("")
  const [searchLengthLower, setSearchLengthLower] = useState(0)
  const [searchLengthHigher, setSearchLengthHigher] = useState(Infinity)
  
  const [trails, setTrails] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [randId, setRandId] = useState(0)
  const [imgClass, setImgClass] = useState("post-trail")

  let bg_image = document.getElementById("background-image")

  useEffect(()=>{  
    bg_image.classList=[imgClass]
  },[imgClass])




  useEffect(()=>{
      fetch("http://localhost:3000/trails").then(resp=>resp.json()).then(arr=>{setTrails(arr); setRandId(arr[Math.floor(Math.random()*arr.length)].id);setIsLoaded(true); })
  },[])
  
  function generateRandId(){
      if(trails===undefined){
          setRandId(0);
      }
      else if (trails.length!==0){
          setRandId(trails[Math.floor(Math.random()*trails.length)].id)
      }
      else{setRandId(0);}
      console.log("id set to "+randId)
  }



  const path = useLocation().pathname;
  const locationList = path.split("/");
  let location = "";
  if(locationList.length===2){
   location = locationList[1];}
   else{
    location="random"
   }

  useEffect(()=>{  setImgClass(location+"_page")

  },[location])

  return (
  <div>
    <NavBar trails={trails} randId={randId} generateRandId={generateRandId}></NavBar>
    <Routes>
      <Route path = "/" element = {<About/>}/>
      <Route index path = "/trails" element={
        <React.Fragment>
          <SearchBar setSearchName = {setSearchName} setSearchDifficulty={setSearchDifficulty} setSearchAddress={setSearchAddress} 
          setSearchLengthHigher={setSearchLengthHigher} setSearchLengthLower={setSearchLengthLower}/>
          <TrailList isLoaded = {isLoaded} trails = {trails} setTrails = {setTrails} searchDifficulty={searchDifficulty} searchAddress={searchAddress} 
          searchLengthHigher={searchLengthHigher} searchLengthLower={searchLengthLower} searchName={searchName}/>
        </React.Fragment>
        }/>
      <Route path = "/trails/:id" element={<DisplayTrail></DisplayTrail>}/>
      <Route path = "/Post" element={<PostTrail trails={trails} setTrails={setTrails}/>}/>
      <Route path = "/Map" element={<Map trails={trails}/>}/>
    </Routes>
  </div>
  )
}

export default App
