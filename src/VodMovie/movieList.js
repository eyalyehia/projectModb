import React, { useEffect } from 'react'
import { VodItem } from './vodItem'
import { useContext } from 'react'
import { Appcontext } from '../moduls/useContext'
import {useSearchParams} from 'react-router-dom'
import { VodStrip } from './vodStrip'

export const MovieList = (props) => {
  const [querys] = useSearchParams();
    let {search} = useContext(Appcontext)
    let {doApi} = useContext(Appcontext)


    useEffect(()=>{
      let searchQ = querys.get("s") || "green"
    doApi(searchQ)
    },[querys])

  return (
    <div>
      <VodStrip/>
    <div className='container-fluid bg-white'>
        <div className='container'>
            <h2>Vod list</h2>
            <div className='row'>
 {search.map((item) => {
   return( <VodItem key = {item.imdbID} item = {item} />)
 })}
         </div>
        </div>
    </div>
    </div>
  )
}
