import React from 'react'
import { Link } from 'react-router-dom'

export const MainComp = (props) => {
  return (
    <div className='container'>
      <div className='row'>
  {props.restApi.map(item => {
    return(
      <div className='col-lg-6 border p-3 shadow'  key={item.imdbID}>
     <h2>{item.Title}</h2>
     <img src={item.Poster}  style={{width: 200}}></img>
     <Link className='btn btn-dark' to={"/info/"+item.imdbID}  >More info</Link>
     </div>
    )
  })}

</div>
    </div>
  )
}
