import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'
import DisplayTrail from './DisplayTrail'
import TrailList from "./TrailList"



function App() {
  const [count, setCount] = useState(0)
  const [trails, setTrails] = useState([])
  return (
  <div>
    <TrailList trails = {trails} setTrails = {setTrails}></TrailList>
    <DisplayTrail></DisplayTrail>
  </div>
  )
}

export default App
