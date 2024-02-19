import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react'

const Navbar = () => {
  const [open, setopen] = useState(false)


  const Toggle = () => {
    setopen(!open)
  }



  return (
    <div id='Navbar'>
      <div className={open ? "slider width " : "slider"}> <div className={!open ? "close" : "close visibility"} onClick={Toggle}><IoClose /></div></div>
      <div className="menu" onClick={Toggle}><IoMenu /></div>
      <h2>RADIUM</h2>
      <div className={open ? "nav visibility" : "nav"}>
        <h5> <a href="/" >Learn</a></h5>
        <h5><a href="#Build" >Build</a></h5>
        <h5><a href="#Developer" >Developers</a></h5>
        <h5><a href="#Network" >Network</a></h5>
        <h5><a href="#Display" >Community</a></h5>
      </div>

    </div>
  )
}

export default Navbar
