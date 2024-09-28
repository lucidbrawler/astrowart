import React, { useState } from 'react'

const Counter = () => {
  
  const [counter, setCounter] = useState(0)
    return (
    <div className='flex mx-auto space-x-8 justify-center'>
        <button onClick={()=> setCounter((prev) => prev + 1)} className='bg-blue-700 text-white h-8 w-8'>+</button> 
        <h3>{counter}</h3> 
        <button onClick={()=> setCounter((prev) => prev - 1)} className='bg-red-700 text-white h-8 w-8'>-</button>  
    </div>
  )
}

export default Counter