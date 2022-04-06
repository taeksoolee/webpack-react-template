import React, { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(v => v+1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>+</button>
    </div>
  )
}