import React from 'react';
import './Navbar.css';
import food_img from '../Assets/food.png';

const Navbar = ({ input, setInput, setQuery }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="brand">
          <img src={food_img} alt="Logo" />
          <span className="navbar-brand">QuickEatz</span>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="text"
            value={input}
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn-outline-success"
            onClick={(e) => {
              setQuery(input);
              e.preventDefault();
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
