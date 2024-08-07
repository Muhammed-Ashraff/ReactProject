import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(2)

    const increment=() =>{
        setCount(count +1)
    }
    const decrement=() =>{
      setCount(count -1)
  }
  const multiply=() =>{
    setCount(count *2)
}
const division=() =>{
  setCount(count /2)
}
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={division}>divide</button>

    </div>
  )
}
