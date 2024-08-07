import React, {useState} from 'react'

export default function JavascriptsCondition() {
    const [number, setNumber] = useState();
    const [message, setMessage] = useState();

    const handleNumber =(e)=>{
        const value = e.target.value;
        setNumber(value);
        if(value === ''){
            setMessage('');
        }else{
            const num = Number(value);
            if(num >0){
                setMessage(<p>The Number you have chosen is greater than 0 and it is: {value}</p>);
            }else if(num < 0){
                setMessage(<p>The Number You have chosen is not availabe and it is: {value}</p>);
            }else{
                setMessage(<p>Please choose any number between 0-30 and it is: {value}</p>);
            }
        }
    }
  return (
    <div>
        <input 
        type="number" 
        value={number}
        onChange={handleNumber}
        placeholder='Enter any number between 0-30'
        />
        {message}
    </div>
  )
}
