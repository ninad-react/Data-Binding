import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <input type='text' value={props.value} onChange={props.onChange}/>
    </div>
  )
}

export default ChildComponent