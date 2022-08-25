import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Movieinformation = (props) => {
let imdVD = props.match.params.id;
let [item,Setitem] = useState({});

useEffect(() => {
doApiInfo();

},[])

const doApiInfo = async() => {
  let id = props.match.params.id;
  let url = `http://www.omdbapi.com/?i=${id}&apikey=eb5a19e8`;
  let resp = await axios.get(url);
  console.log(resp.data);
  Setitem(resp.data);
}

  return (
<div className='container'>
  <div className='col-lg-6 shadow p-3 overflow-hidden mx-auto'>
    <img src={item.Poster} className="w-25 float-start me-2" />
    <h2>{item.Title}</h2>
     <div>Score: {item.imdbRating}</div>
     <div>Votes count: {item.imdbVotes}</div>
     <div>Year: {item.Year}</div>
     <Link className='btn btn-dark' to="/">Back</Link>
  </div>
</div>
  
  )
}
