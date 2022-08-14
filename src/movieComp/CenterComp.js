import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {sortBy} from "lodash"
import { InputComp } from './InputComp'
import { MainComp } from './MainComp'

export const CenterComp = () => {

let [ar,arSet] = useState([]);
let [input,setinput] = useState("red");


  useEffect(() => {
      restApi();

  },[input])

   const restApi = async() => {
    let url =  `http://www.omdbapi.com/?s=${input}&apikey=eb5a19e8`;
    // let resp = await fetch(url);
    // let data = await resp.json();
    let resp = await axios.get(url)
    arSet(resp.data.Search);
   }

   const inputValue = (_val) => {
   setinput(_val)
   }

  return (
    <div>
        
        <InputComp restApi = {ar} inputValue = {inputValue} />
        <MainComp restApi = {ar} />

    </div>
  )
}
