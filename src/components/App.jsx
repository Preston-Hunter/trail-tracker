import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'
import TrailList from "./TrailList"



function App() {
  const [count, setCount] = useState(0)
  const [trails, setTrails] = useState([])
  return (
   <TrailList trails = {trails} setTrails = {setTrails}></TrailList>
  )
}

export default App
