import React from 'react'
import { VodItem } from './vodItem'
import { useContext } from 'react'
import { Appcontext } from '../moduls/useContext'

export const MovieList = (props) => {

    let {search} = useContext(Appcontext)

  return (
    <div className='container-fluid bg-white'>
        <div className='container'>
            <h2>Vod list</h2>
            <div className='row'>
 {search.map((item) => {
   return( <VodItem key = {item.imdbID} item = {item}/>)
 })}
         </div>
        </div>
    </div>
  )
}
