import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';

export const InputComp = (props) => {

  let id_input = useRef();
  let click = useRef();
  let id_change = useRef();
  let history = useHistory();
  return (
    <div className='container-fluid bg-primary d-flex justify-content-center align-items-center'>
    <div className='w-25 input-group mb-3 mt-3'>
        <input placeholder='input' ref={id_input} className='form-control' />
        <button className='btn btn-dark' ref={click} onClick={() => { 
          history.push("/")
          props.inputValue(id_input.current.value)}}>Click Me</button>
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
