import React from 'react'

function MovieCard({movie}) {
  return (
    <div className='movie'>
          <div className='year'>
            <p>{movie.Year}</p>
          </div>
          <div className='movie-img'>
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title}/>
          </div>
          <div className='movie-type'>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
  )
}

export default MovieCard