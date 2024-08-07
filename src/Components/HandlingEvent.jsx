import React, {useState} from 'react'

export default function HandlingEvent() {
    const [message, setMessage] = useState();
    const clickButton=() =>{
       setMessage('You clicked me');
    }
  return (
    <div>
        <button onClick={clickButton}>click me</button>
        <p>{message}</p>
    </div>
  )
}
