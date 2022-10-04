import React from 'react'

const CommonButton = ({text, handlesubmission}) => {
  return (
    <div className="fieldmain">
        <button className='commonButton' onClick= {handlesubmission}>{text}</button>
    </div>
  )
}

export default CommonButton