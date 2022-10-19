import React from 'react'
import './Btn.css'

function Btn({text}) {
  return (
      <button className='btn'>
        {text}
      </button>
  )
}

export default Btn