import React, { useState } from 'react'

function Events(){
  const [isClick, setIsClick]=useState('Not clicked');
  const handleClick=()=>{
    console.log('Hovered');
    setIsClick('Clicked');
  }
  return(
    <div>
      <h1>{isClick}</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  ) 
}

export default Events
