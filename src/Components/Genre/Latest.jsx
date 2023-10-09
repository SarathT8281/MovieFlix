import React, { useEffect, useState } from 'react'
import './Cards.css';
import {API_KEY,imageUrl} from '../../Constants/Constant'
import  Axios  from '../Axios';

function Latest() {
    const [latest, setLatest] = useState([])
    useEffect(() => {
         Axios.get(`discover/movie?api_key=${API_KEY}&with_genres=28`).then((Response)=>{
            console.log(Response.data);
            setLatest(Response.data.results)
         })

        
    
      
      
    }, [])
    
  return (
    <div className='row'>
        <h1 style={{marginLeft:'55px'}} >Latest</h1>
        <div className='cards'>

            {latest.map((obj)=>
                 <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="IMG" />

            )}
           
            
            
            
       

        </div>



    </div>
  )
}

export default Latest

