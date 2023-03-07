import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'
import DisplayTrail from './DisplayTrail'
import TrailList from "./TrailList"
import NavBar from "./NavBar"
import SearchBar from './SearchBar'
import PostTrail from './PostTrail'

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
    <SearchBar setSearchName = {setSearchName} setSearchDifficulty={setSearchDifficulty} setSearchAddress={setSearchAddress} 
    setSearchLengthHigher={setSearchLengthHigher} setSearchLengthLower={setSearchLengthLower}></SearchBar>
    <TrailList trails = {trails} setTrails = {setTrails} searchDifficulty={searchDifficulty} searchAddress={searchAddress} 
    searchLengthHigher={searchLengthHigher} searchLengthLower={searchLengthLower} searchName={searchName}></TrailList>
    <DisplayTrail></DisplayTrail>
    <PostTrail trails={trails} setTrails={setTrails}></PostTrail>
  </div>
  )
}

export default App
