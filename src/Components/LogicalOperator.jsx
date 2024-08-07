import React,{useState} from 'react'

export default function LogicalOperator() {
    const [showMessage, setShowMessage] = useState();
  return (
    <div>
        <button onClick={()=>setShowMessage(!showMessage)}>
            {showMessage ? 'Hide message' : 'Show message'}
        </button>
        {showMessage && <p>This message is conditionally displayed</p>}
    </div>
  )
}
