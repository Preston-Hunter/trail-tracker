import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'
import DisplayTrail from './DisplayTrail'
import TrailList from "./TrailList"



function App() {
  const [searchName, setSearchName] = useState("")
  const [searchDifficulty, setSearchDifficulty] = useState("")
  const [searchAddress, setSearchAddress] = useState("")
  const [searchLengthLower, setSearchLengthLower] = useState(0)
  const [searchLengthHigher, setSearchLengthHigher] = useState(Infinity)

  const [trails, setTrails] = useState([])

  return (
  <div>
    <TrailList trails = {trails} setTrails = {setTrails} searchDifficulty={searchDifficulty} searchAddress={searchAddress} 
    searchLengthHigher={searchLengthHigher} searchLengthLower={searchLengthLower} searchName={searchName}></TrailList>
    <DisplayTrail></DisplayTrail>
  </div>
  )
}

export default App
