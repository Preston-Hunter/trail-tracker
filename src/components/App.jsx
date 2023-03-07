import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'
import DisplayTrail from './DisplayTrail'
import TrailList from "./TrailList"
import NavBar from "./NavBar"
import SearchBar from './SearchBar'
import PostTrail from './PostTrail'
import {Route, Routes} from "react-router-dom"

function App() {
  const [searchName, setSearchName] = useState("")
  const [searchDifficulty, setSearchDifficulty] = useState("")
  const [searchAddress, setSearchAddress] = useState("")
  const [searchLengthLower, setSearchLengthLower] = useState(0)
  const [searchLengthHigher, setSearchLengthHigher] = useState(Infinity)
  
  const [trails, setTrails] = useState([])

  return (
  <div>
    <NavBar></NavBar>
    <Routes>
      <Route path = "/" element={
        <React.Fragment>
          <SearchBar setSearchName = {setSearchName} setSearchDifficulty={setSearchDifficulty} setSearchAddress={setSearchAddress} 
          setSearchLengthHigher={setSearchLengthHigher} setSearchLengthLower={setSearchLengthLower}/>
          <TrailList trails = {trails} setTrails = {setTrails} searchDifficulty={searchDifficulty} searchAddress={searchAddress} 
          searchLengthHigher={searchLengthHigher} searchLengthLower={searchLengthLower} searchName={searchName}/>
        </React.Fragment>
        }/>
 
        

      <Route path = "/TrailDetails" element={<DisplayTrail></DisplayTrail>}/>
      <Route path = "/Post" element={<PostTrail trails={trails} setTrails={setTrails}/>}/>
    </Routes>
  </div>
  )
}

export default App
