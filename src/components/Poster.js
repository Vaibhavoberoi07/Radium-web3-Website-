import React from 'react'
import Button2 from './Button2'

const Poster = () => {
  return (
    <div className='poster' id='Build'>
      <div className="main-pos">
      <h3 className='blue-w'>DEVELOPER PORTAL</h3>
      <div className="p-head">
        <h1>Community Collaboration</h1>
        <p>Join a vibrant community of developers, blockchain enthusiasts, and experts. Participate in forums, discussions, and collaborative projects.</p>
      </div>
      <div className="p-btn rawbtn">
      <Button2 text={"Join Now"}/>
      </div>
      </div>
    </div>
  )
}

export default Poster
