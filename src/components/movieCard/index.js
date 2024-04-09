import React from 'react'
import { useNavigate } from 'react-router-dom'

function MovieCard({id, title, imagePath, rating}) {

  const navigate = useNavigate()

  const handleClick = (movieId) => {
    navigate(`/movie-detail/${movieId}`)
  }

  return (
    <div onClick={() => handleClick(id)} className='movie-card'>
        <img className='movie-img' alt={title} src={`https://image.tmdb.org/t/p/w500${imagePath}`}/>
        <h1 className='movie-title'>{title}</h1>
        <p className='movie-title'>Rating : {rating}</p>
    </div>
  )
}

export default MovieCard