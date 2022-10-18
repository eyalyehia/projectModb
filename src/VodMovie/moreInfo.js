import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import './home.css'

export const MoreInfo = (props) => {

const params = useParams();
let [item,SetItem] = useState([]);
const nav = useNavigate();

    useEffect(() => {
        restApi(params["id"])
    },[params["id"]])
     
    const restApi = async(_val) => {
    let url = `http://www.omdbapi.com/?i=${_val}&apikey=eb5a19e8`
    let resp = await axios(url)
    let data = resp.data
    console.log(data)
    SetItem(data)
    }
    

  return (
    <div  className='container-fluid bg-white'>
        <div  className='container shadow text-center w-25 mx-auto'>
        <img id='id_info' src={item.Poster} />
        <h4>{item.Title}</h4>
        <p>Year : {item.Year}</p>
        <p>Rated: {item.imdbRating}</p>
        <p>Votes: {item.imdbVotes}</p>
        <p>Country: {item.Country}</p>
        <button onClick={() => nav(-1)} className='btn btn-dark mb-3'>Back</button>
        </div>
    </div>
  )
}
