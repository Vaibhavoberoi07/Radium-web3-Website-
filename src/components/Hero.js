import React from 'react'
import Button1 from './Button1'
import Button2 from './Button2'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="blur"></div>
      <div className="main-head">
        <h1 className='center main-h'>Towards Decentralized</h1>
        <h1 className='center main-h'>Future</h1>
      </div>
      <p className='center main-para para-1'>Empowering financial evolution. Secure transactions, advanced blockchain. Decentralized </p>
      <p className='center main-para'>fast, Radium heralds a new era in efficient, transparent finance.</p>
      <div className="main-btns">
        <Button1 text={"Explore"}/>
       <div className="devbtnmain"><Button2 text={"Learn"}/></div> 
      </div>
    </div>
  )
}

export default Hero
