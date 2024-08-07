import React, {useState} from 'react'

export default function HandlingEventOnChange() {
    const [setValue, setInputValue] = useState();

    const handlingOnChangeEvent=(event)=>{
        setInputValue(event.target.value);
    }
  return (
    <div>
        <input 
        type="text" 
        value={setValue}
        onChange={handlingOnChangeEvent}
        placeholder='Enter your name'
        />
        <p>You typed: {setValue}</p>
    </div>
  )
}
