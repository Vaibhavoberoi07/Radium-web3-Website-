import React from 'react'
import Button2 from './Button2'

const Financial = () => {

    const devWith = {
         width: '60%'
    }
  return (
    <div className='financial' id='Network'>
       <h3 className='blue-w'>NETWORK</h3>
      <div className="tech-head">
        <h1>Creating a Fair Financial System through  </h1>
        <h1>Blockchain <span className='color'>Technology.</span></h1>
        <p className='ps' style={devWith} >Blockchain technology enables the creation of a transparent and immutable ledger of financial transactions. Every transaction recorded on the blockchain is visible to all participants, ensuring accountability and reducing the potential for fraud or manipulation.</p>
      </div>
      <div className="buttonwrap rawbtn ">
      <Button2 text={"Explore"}/>
      </div>
    </div>
  )
}

export default Financial
