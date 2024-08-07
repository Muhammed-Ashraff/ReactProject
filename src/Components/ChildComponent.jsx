import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <h1>The username is {props.name}</h1>
        <p>and her age is {props.age}</p>
    </div>
  )
}
