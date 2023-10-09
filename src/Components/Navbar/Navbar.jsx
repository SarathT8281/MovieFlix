import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className='Navbar'>
        <div>
        <img style={{width:'100%',height:'120px'}} src="https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
        <div>
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPAqL71cCalBJVKIzTwWFYE8G8iaic_Dhtg&usqp=CAU" alt="" />
        <h2 className='heading'>MOVIE PRIME</h2>
        <ul className='nav-list'>
        <Link style={{textDecoration:'none'}} to={'/latest'}>  <li className='nav-text'>Latest</li>  </Link>
       <Link style={{textDecoration:'none'}} to={'/comdey'}> <li className='nav-text'>Comedy</li> </Link>
       <Link style={{textDecoration:'none'}} to={'/popular'}>  <li className='nav-text'>Popular</li>  </Link>
        </ul>
        <div className='search'>
          <input className='input' type="text"placeholder='Search Movies' />
          <button className='btn-search'>Search</button>
        </div>

        </div>
        </div>
  )
}

export default Navbar