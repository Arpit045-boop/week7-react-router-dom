import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Landing from './Landing'

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate("/dashboard")
      }}>Dashboard</button>
      <button onClick={()=>{
        navigate("/")
      }}>Landing</button>
    </div>
  )
}
