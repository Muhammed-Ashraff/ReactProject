import React, { useState } from 'react'

export default function HandlingSubmitEvent() {
    const [name, setName] = useState();
    const [lastname, setLastName] = useState();
    const [gender, setGender] = useState();


    const [submittedName, setSubmittedName] = useState();
    const [submittedLastName, setSubmittedLastName] = useState();
    const [submittedGender, setSubmittedGender] = useState();

    const handleSubmitEvent=(event)=>{
        event.preventDefault();
        setSubmittedName(name);
        setSubmittedLastName(lastname);
        setSubmittedGender(gender);
    }
  return (
    <div>HandlingSubmitEvent
        <form onSubmit={handleSubmitEvent}>

            <label>Firstname</label>
            <input 
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <label>Last name</label>
            <input 
            type="text"
            value={lastname}
            onChange={(e)=>setLastName(e.target.value)}
            />

            <label>Gender</label>
            <input 
            type="text"
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        <p>First name submitted is {submittedName}</p>
        <p>Last name submitted is {submittedLastName}</p>
        <p>Gender submitted is {submittedGender}</p>
    </div>
  )
}
