import React from "react"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Page from "./components/Page"

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
   </>
    
  )
}