import React from 'react'

const MovieCard = ({movies}) => {

 
  return (
   <div className='card'>

     <img src={movies.posterUrl} alt=''/>
     <p> &nbsp;⭐ {movies.rate}</p>
     <p> &nbsp; {movies.title}</p>
      <div className='description'>{movies.description}</div>
   </div>
  )
}

export default MovieCard