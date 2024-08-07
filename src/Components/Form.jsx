import React, { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName : "",
    });
    const handleInputChange=(event)=>{
        const {name, value} = event.target;
        setFormData({...formData, [name] : value});
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(formData, "formData");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>First name</label>
            <input 
            type="text" 
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            />
            <label>Last name</label>
            <input 
            type="text" 
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
