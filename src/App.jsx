import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from "./homepage/Homepage"
import About from "./about/About"
import NavComponent from './component/NavComponent'
const App=()=>{
  return (
    <BrowserRouter>
    
    <Routes>
      <Route index element={<Homepage />}/>
      <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
