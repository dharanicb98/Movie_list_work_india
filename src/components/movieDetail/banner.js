import React from 'react'


function Banner({backdrop_path, overview, title, vote_average, runtime, genres, release_date, poster_path}) {
 return (
    <div className='movie-content'>
   <div style={{ backgroundImage:`url(https://image.tmdb.org/t/p/w500${backdrop_path})`}} className='movie-container'>
       <div className='movie-content-container'>
           <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className='movie-content-img movie-content-icon'/>
           <div>
               <h1>{title}</h1>
               <p>Rating: {vote_average}</p>
               <div>
                  <p>{runtime} min</p>
                  {genres?.map(genre => genre.name).join(', ')}
               </div>
               <p>Release Date: {release_date}</p>
           </div>
       </div>


       <h1 className='overview heading'>Overview</h1>
       <p className='overview'>{overview}</p>
   </div>
   </div>
 )
}


export default Banner

