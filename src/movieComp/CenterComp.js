import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {sortBy} from "lodash"
import {Movieinfo} from '/Movieinfo'
import { InputComp } from './InputComp'
import { MainComp } from './MainComp'
import { BrowserRouter as Router, Route, Switch ,Routes ,Link } from 'react-router-dom';

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
    console.log(temp_ar)
   }

   const inputValue = (_val) => {
   setinput(_val)
   }

  return (
         <Router>
                 <InputComp doSearchApi = {doSearchApi} inputValue = {inputValue} />
          <Switch>
            <Route exact path="/" render = {() => 
       <div>

     <MainComp restApi = {ar} />
    
 </div> 
            } />

          <Route exact path="/info/:id" component={Movieinfo} />


   </Switch>
   </Router>
  )
 
}
