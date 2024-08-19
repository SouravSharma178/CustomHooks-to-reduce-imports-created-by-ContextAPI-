import React from 'react'
import { useState } from 'react'

const Counter = () => {
const [count,setCount] = useState(0);
function handleCount(){
    setCount(count+1)
}

  return (
    <div>
     <button class="counterButton" onClick={handleCount}>Status{count}</button>
    </div>
  )
}

export default Counter
