import React from 'react'

const PrimaryBtn = (props) => {
  return (
      <button className='bg-secondary-color px-4 py-1 rounded'>{props.text}</button>
  )
}

export default PrimaryBtn