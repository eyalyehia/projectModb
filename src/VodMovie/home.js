import React from 'react'
import { VodStrip } from './vodStrip'
import './home.css'
import { MovieList } from './movieList'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {Appcontext} from '../moduls/useContext'
import { Footer } from './footer'
import { InputMovie } from './inputMovie'
import {BrowserRouter,Routes,Route,useSearchParams} from 'react-router-dom'

export const Home = () => {

    let [search,setSearch] = useState([]);
    let [inputVal,SetinputVal] = useState("green")
    const [querys] = useSearchParams();

    useEffect(() => {
        let searchQ = querys.get("s") || "green";
     doApi(searchQ);
    },[])

    const doApi = async(_search) => {
        let url = `http://www.omdbapi.com/?s=${_search}&apikey=eb5a19e8`
        let resp = await axios(url)
        let data = resp.data
        console.log(data)
        console.log(data.Search)
        setSearch(data.Search)
    }

    // const changeApi = (_val) => {
    // SetinputVal(_val)
    // }

  return (
    <div className='bg-dark'>
     <BrowserRouter>  
        <Appcontext.Provider value={{ search:search}}>
     
            <InputMovie  />
        <VodStrip />
            <Routes>
      <Route index element={<MovieList/>}/>  
        </Routes>
            <Footer/>
        </Appcontext.Provider>
        </BrowserRouter>    
         
    </div>
  )
}
