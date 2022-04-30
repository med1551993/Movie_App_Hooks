import React from 'react'
import MovieCard from './MovieCard'


const Filter = ({searchTerm, movies}) => {      
  return (                      
       <>   {['1','2','3','4','5'].includes(searchTerm) ?  
            movies.filter( (val) => val.rate <= searchTerm) 
            .map(val => <MovieCard movies={val} />) :
            movies.filter( (val) => val.title.toLowerCase().includes(searchTerm.toLowerCase())) 
            .map(val => <MovieCard movies={val} />)}
      </>
  )}
export default Filter