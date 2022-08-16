import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {sortBy} from "lodash"
import { InputComp } from './InputComp'
import { MainComp } from './MainComp'

export const CenterComp = () => {

let [ar,arSet] = useState([]);
let [input,setinput] = useState("red");
let [sortSelect,setSortSelect] = useState("Title");

  useEffect(() => {
      restApi();

  },[input])

  const doSearchApi = (_sort) => {
    let temp_ar = sortBy(ar,_sort)
    arSet(temp_ar);
    setSortSelect(_sort)
  }



   const restApi = async() => {
    let url =  `http://www.omdbapi.com/?s=${input}&apikey=eb5a19e8`;
    // let resp = await fetch(url);
    // let data = await resp.json();
    let resp = await axios.get(url)
    let temp_ar = sortBy(resp.data.Search,sortSelect);
    arSet(temp_ar);
   }

   const inputValue = (_val) => {
   setinput(_val)
   }

  return (
    <div>
        
        <InputComp doSearchApi = {doSearchApi} inputValue = {inputValue} />
        <MainComp restApi = {ar} />

    </div>
  )
}
