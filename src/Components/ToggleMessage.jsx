import React, {useState} from 'react'

export default function ToggleMessage() {
    const [showMessage, setShowMessage] = useState();
  return (
    <div>
        {showMessage ? <p>Hello, Welcome!</p> : <p>Goodbye, See you soon!</p>}
        <button onClick={()=> setShowMessage(!showMessage)}>
            {showMessage ? 'Switch Off' : 'Switch On'}
        </button>
    </div>
  )
}
