import React from 'react'
import { useState } from 'react'
const Add = ({show, setShow, addmovie}) => {
const [movie,setMovie]=useState({
  title: '',
  description: '',
  posteUrl: '',
  rate: ''
})
  return ( 
   show ?
   <div className='bg'>
     <div className='new-movie'>
        
           <button onClick={() => setShow(false)}> X </button>        
            <input type="text" placeholder=" Enter Title" onChange={(event)=>setMovie({...movie,title:event.target.value})}/>
            <input type="text" placeholder=" Enter Image" onChange={(event)=>setMovie({...movie,posterUrl:event.target.value})}/>
            <input type="text" placeholder=" Enter Description" onChange={(event)=>setMovie({...movie,description:event.target.value})}/>
            <input type="number" placeholder=" Enter Rate" onChange={(event)=>setMovie({...movie,rate:event.target.value})}/>
           <button onClick={() => {setShow(false); addmovie(movie)}}> Submit </button>
          
    </div>
  </div> : null 
  )
}

export default Add