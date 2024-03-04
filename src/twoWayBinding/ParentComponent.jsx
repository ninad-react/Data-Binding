import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    console.log(inputValue);
  return (
    <div>
        <ChildComponent value={inputValue} onChange={handleChange}/>
    </div>
  )
}

export default ParentComponent