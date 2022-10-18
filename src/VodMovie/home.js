import React from 'react'
import './home.css'
import { MovieList } from './movieList'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {Appcontext} from '../moduls/useContext'
import { Footer } from './footer'
import { InputMovie } from './inputMovie'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { MoreInfo } from './moreInfo'


export const Home = () => {

    let [search,setSearch] = useState([]);


    useEffect(() => {
     doApi("green");
    },[])

    const doApi = async(_search) => {
        let url = `http://www.omdbapi.com/?s=${_search}&apikey=eb5a19e8`
        let resp = await axios(url)
        let data = resp.data
        console.log(data.Search)
        data.Error ? setSearch([{"Title":data.Error}]) : setSearch(data.Search) ;
    }


  return (
    <div>
     <BrowserRouter>  
        <Appcontext.Provider value={{ search:search , doApi:doApi}}>
            <InputMovie  />
        <Routes>
           <Route path='/' element={<MovieList/>}/>  
           <Route path={`/:id`} element = {<MoreInfo />} />
        </Routes>
            <Footer/>
        </Appcontext.Provider>
        </BrowserRouter>    
    </div>
  )
}
