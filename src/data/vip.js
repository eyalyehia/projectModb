import React from 'react'

function Vip() {
  return (
    <div className="col-lg-6 p-3 shadow mt-3 mx-auto" >
       <h2>Enter the coin you want:</h2>
       <select className="form-select">
        <option value="3.3">UST</option>
        <option value="3.9">EURO</option>
        <option value="0.11">BATH</option>
       </select>
       <h2>Enter the coin you want:</h2>
       <input type="number" className="form-control"/>
       <h3 className="mt-4">you will get --- NIS</h3>
    </div>
  )
}

export default Vip