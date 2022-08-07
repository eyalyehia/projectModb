import React, { useRef, useState } from 'react'

function Vip() {
let changeSelect = useRef();
let changePrice = useRef();
let [matach,improve] = useState();

const changeMany = () => {
    let many = changeSelect.current.value * changePrice.current.value;
   improve(many);
}

    
  return (
    <div className="col-lg-6 p-3 shadow mt-3 mx-auto" >
       <h2>Enter the coin you want:</h2>
       <select onChange={changeMany} className="form-select" ref={changeSelect}>
        <option value="3.3">UST</option>
        <option value="3.9">EURO</option>
        <option value="0.11">BATH</option>
       </select>
       <h2>Enter the coin you want:</h2>
       <input type="number" placeholder="1" className="form-control" ref={changePrice}/>
       <h3 className="mt-4">you will get {matach} NIS</h3>
    </div>
  )
}

export default Vip