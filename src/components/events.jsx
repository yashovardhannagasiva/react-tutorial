import React, { useState } from 'react'

function Events(){
  const [name,setName]=useState('')

  const handleSubmit=(event) =>{

  }
  const handleChange=(event)=>{
 
    if(event._reactName=== 'onChange'){
      setName(event.target.value)
    }
    else{
      console.log('clicked')
    }
  }

  return(
    <div>
      <form >
        <input type="text" onChange={handleChange} onClick={handleChange} value={name}/>
        <button onSubmit={handleSubmit} >Submit</button> 
      </form>
    </div>
  ) 
}
// onChange ,onSubmit
export default Events
