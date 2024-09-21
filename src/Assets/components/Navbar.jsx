import React from 'react'
import { Link } from 'react-router-dom'
import RecipeFinder from './RecipeFinder'
import './Navbar.css'
import food_img from '../Assets/food.png'


const Navbar = ({input,setInput,query,setQuery}) => {
  
  return (
    <div>
      {/* <span>logo</span>
       <RecipeFinder/> */}

        <nav className="navbar">
          <div className="container-fluid">
            <div className='brand'>
            <img src={food_img} alt='...'/>
            <a className="navbar-brand ">QuickEatz</a>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                value={input}
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="btn btn-outline-success" onClick={(e) => {setQuery(input);e.preventDefault(); }}>
                Search
              </button>
            </form>
          </div>
        </nav>
      
   </div>
  )
}

export default Navbar
