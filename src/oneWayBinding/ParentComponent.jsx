import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

    const data = "Hello From Parent";

  return (
    <div>
        <ChildComponent data={data}/>
    </div>
  )
}

export default ParentComponent