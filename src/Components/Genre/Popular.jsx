import React, { useEffect, useState } from 'react'
import './Cards.css';
import {API_KEY,imageUrl} from '../../Constants/Constant'
import  Axios  from '../Axios';

function Popular() {
    const [Popular, setPopular] = useState([])
    useEffect(() => {
         Axios.get(`discover/movie?api_key=${API_KEY}&with_genres=10749`).then((Response)=>{
            console.log(Response.data);
            setPopular(Response.data.results)
         })

        
    
      
      
    }, [])
    
  return (
    <div className='row'>
        <h1 style={{marginLeft:'55px'}} >Popular</h1>
        <div className='cards'>

            {Popular.map((obj)=>
                 <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="IMG" />

            )}
           
            
            
            
       

        </div>



    </div>
  )
}

export default Popular