import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'
import DisplayTrail from './DisplayTrail'
import TrailList from "./TrailList"
import NavBar from "./NavBar"
import SearchBar from './SearchBar'
import PostTrail from './PostTrail'
import {Route, Routes} from "react-router-dom"
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

  useEffect(()=>{
      fetch("http://localhost:3000/trails").then(resp=>resp.json()).then(arr=>{setTrails(arr); setIsLoaded(true)})
  },[])

  return (
  <div>
    <NavBar trails={trails}></NavBar>
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
      <Route path = "/Map" element={<Map/>}/>
    </Routes>
  </div>
  )
}

export default App
