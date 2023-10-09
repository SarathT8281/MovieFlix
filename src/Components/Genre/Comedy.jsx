import React, { useEffect, useState } from 'react'
import './Cards.css';
import {API_KEY,imageUrl} from '../../Constants/Constant'
import  Axios  from '../Axios';

function Comedy() {
    const [comedy, setComedy] = useState([])
    useEffect(() => {
         Axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((Response)=>{
            console.log(Response.data);
            setComedy(Response.data.results)
         })

        
    
      
      
    }, [])
    
  return (
    <div className='row'>
        <h1 style={{marginLeft:'55px'}} >COMEDY</h1>
        <div className='cards'>

            {comedy.map((obj)=>
                 <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="IMG" />

            )}
           
            
            
            
       

        </div>



    </div>
  )
}

export default Comedy