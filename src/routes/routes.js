import React, { useState } from 'react'
import { BrowserRouter, Routes, Route,   } from 'react-router-dom'
import Layout from '../components/layout'
import Home from '../pages/home'
import TopRated from '../pages/topRated'
import UpcomingMovies from '../pages/upComingMovies'
import MovieDetail from '../pages/movieDetail'




const Router = () =>  {
 const [searchQuery, setSearchQuery] = useState('');
  return (
   <BrowserRouter>
     <Layout  setSearchQuery={setSearchQuery}>
       <Routes>
           <Route path='/' element={<Home searchQuery={searchQuery}/>} />
           <Route path="/top-rated" element={<TopRated searchQuery={searchQuery}/>}/>
           <Route path="/upcoming" element={<UpcomingMovies searchQuery={searchQuery}/>}/>
        <Route path="/movie-detail/:id"  element={<MovieDetail/>}/>
       </Routes>
     </Layout>
   </BrowserRouter>
 )
}


export default Router

