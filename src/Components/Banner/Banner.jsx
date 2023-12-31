import React, { useEffect, useState } from 'react'
import './Banner.css';
import {API_KEY,imageUrl} from '../../Constants/Constant'
import  Axios  from '../Axios';


function Banner() {
  const [movie,setMovie] = useState([])
  useEffect(() => {
    Axios.get(`discover/movie?api_key=${API_KEY}&with_genres=10749`).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results[0])
    })
    
  }, [])
  

  return (
   
    <div  style={{ backgroundImage: `url(${imageUrl+movie.backdrop_path})`,backgroundPositionY:'inherit' }}
     className='banner'>
        <div className="content">
        <h1 className="title">{movie.original_title
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

export default Banner




 