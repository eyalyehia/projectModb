import React from 'react'


export const VodItem = (props) => {



  return (
    <div className='col-md-4 border p-2 shadow m-2 mx-auto'>
        <img src={props.item.Poster} className='float-start w-25 mx-2' />
     <h2>{props.item.Title}</h2>
     <p>{props.item.Year}</p>
     <button className='btn btn-dark'>More Info</button>
    </div>
  )
}
