import React from 'react'
import { useState } from 'react'
import Add from './Add'
import Filter from './Filter'



const MovieList = () => {
  const [show,setShow]=useState(false)
  const [searchTerm,setSearchTerm]=useState('')
  const [movies,setMovies]=useState([
    {
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: "3",
    },
    {
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
    },
    {
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
    },
   {
      title: "movie 1",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      rate: "5",
    },     {
      title: "Free guy",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://i.ytimg.com/vi/N2R2bjxjcS0/movieposter_en.jpg",
      rate: "3.5",
    },
{
      title: "Adam's family ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://www.miconcinemas.com/media/1712/webtheaddamsfamily2_payoffposter_resizewidth-800.jpg",
      rate: "4",
    },

  ]); 
  const addmovie = (movie) => setMovies([movie,...movies])
  return (
    <div className='List'>
      
     <Add show={show} setShow={setShow} addmovie={addmovie}/>

      <div className='filter'>    
          <input type='text' placeholder=' search by title/rate...' onChange={(event) => setSearchTerm(event.target.value)}  />    
          <i class="fa-solid fa-magnifying-glass"></i> 
      </div>  
      
      <div className='cards'> 
         <Filter searchTerm={searchTerm} movies={movies} />
         <button className='card card1' onClick= {() => setShow(true)}> <p>+</p> </button>
      </div>

    </div>
  )
}

export default MovieList