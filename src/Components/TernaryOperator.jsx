import React, {useState} from 'react'

export default function TernaryOperator() {
    const [isLoggedIn, setLoggedIn] = useState();
  return (
    <div>
        {isLoggedIn ? <p>Welcome back </p> : <p>Please log in</p>}
        <button onClick={()=>setLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
    </div>
  )
}
