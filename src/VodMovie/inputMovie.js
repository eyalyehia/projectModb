import React from 'react'
import { useRef } from 'react'
import './home.css'
import {useNavigate} from 'react-router-dom'
import StickyBox from "react-sticky-box"

export const InputMovie = (props) => {
let inputValue = useRef()
let btnClick = useRef()
const nav = useNavigate();


const onSearchClick = () => {
  let input_val = inputValue.current.value;
  nav(`/?s=${input_val}`)
}


  return (
        <StickyBox className='border-bottom id_input'>
    <div className='container-fluid bg-dark' >
    <div className="input-group mx-auto container row justify-content-between align-items-center">
      <div className='col-6'>
        <h1 id='logo'><i>My Vod</i></h1>
      </div>
      <div className='col-4 d-flex'>
        <div className='position-relative col-8'>
        <input type="text" onKeyDown={(e) => e.key == "Enter" ? onSearchClick() : false} ref={inputValue} className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <i id='search' className="fa-solid fa-magnifying-glass bg-white"></i>
        </div>
        <div>
  <button ref={btnClick} onClick = {onSearchClick} className=" btn btn-outline-secondary text-white" type="button" id="button-addon2">Button</button>
  </div>
        </div>
        </div>
        </div>
  </StickyBox>
  )
}
