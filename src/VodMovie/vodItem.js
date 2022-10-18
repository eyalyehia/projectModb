
import React from 'react'
import {Link} from 'react-router-dom'


export const VodItem = (props) => {
let imdbID = props.item.imdbID
let checkPic = props.item.Poster


  return (
    <div className=' col-md-4 ms-1 mb-2 border p-2 shadow mx-auto h-100 overflow-hidden'> 
        <img src={checkPic} className='float-start w-25 mx-2' />
     <h3>{props.item.Title}</h3>
     <p>{props.item.Year}</p>
     <Link to={"/" + imdbID} className = 'btn btn-dark' >More Info</Link>
    </div>
  )
}
