import React from 'react'

export const MainComp = (props) => {
  return (
    <div className='container'>
      <div className='row'>
  {props.restApi.map(item => {
    return(
      <div className='col-lg-6 border p-3'  key={item.imdbID}>
     <h2>{item.Title}</h2>
     <img src={item.Poster}  style={{width: 200}}></img>
     </div>
    )
  })}

</div>
    </div>
  )
}
