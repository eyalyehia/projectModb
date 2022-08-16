import React, { useRef } from 'react'

export const InputComp = (props) => {

  let id_input = useRef();
  let click = useRef();
  let id_change = useRef();

  return (
    <div className='container-fluid bg-primary d-flex text-center'>
    <div className='container'>
        <input placeholder='input' ref={id_input} />
        <button className='btn btn-dark' ref={click} onClick={() => { props.inputValue(id_input.current.value)}}>Click Me</button>
    </div>
    <div className='mx-2'>
    <select ref={id_change} onChange = {() => 
    {props.doSearchApi(id_change.current.value)}
    } className='form-select w-30'>
      <option value="Title" >Name</option>
      <option value="Year" >Year</option>
    </select>
    </div>
    </div>
  )
}
