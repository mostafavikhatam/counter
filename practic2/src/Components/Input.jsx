import React from 'react'
import "../Components/Input"
 function Input ({ali, text}) {
  return (
    <div>
        <input type='text' onChange={(e) =>text(e)}  className='text'/>
    </div>
  )
}
export default Input