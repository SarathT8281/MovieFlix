import React, { useEffect, useState } from 'react'
import './Banner.css';
import {API_KEY,imageUrl} from '../../Constants/Constant'
import  Axios  from '../Axios';


function ComedyBanner() {
  const [movie,setMovie] = useState([])
  useEffect(() => {
    Axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((Response)=>{
      console.log(Response.data);
      const Shuffle =Math.floor(Math.random() * Response.data.results.length)
      setMovie(Response.data.results[Shuffle])
    })
    
  }, [])
  

  return (
   
    <div style={{ backgroundImage: `url(${imageUrl+movie.backdrop_path})`,backgroundPositionY:'inherit' }}
     className='banner'>
        <div className="content">
        <h1 className="title">{movie.original_name

}</h1>
        <div className="btns">
            <button className='btn'>Play</button>
            <button className='btn'>Trailer</button>

        </div>
        
        <h3 className='description'> {movie.overview} </h3>

        </div>
    </div>
  )
}

export default ComedyBanner