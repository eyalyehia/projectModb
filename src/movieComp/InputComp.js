import React from 'react'

export const InputComp = () => {
  return (
    <div className='container-fluid bg-primary d-flex text-center'>
    <div className='container'>
        <input placeholder='input'  />
        <button className='btn btn-dark'>Click Me</button>
    </div>
    <div className='mx-2'>
    <select className='form-select w-30'>
      <option>Name</option>
      <option>Year</option>
    </select>
    </div>
    </div>
  )
}
