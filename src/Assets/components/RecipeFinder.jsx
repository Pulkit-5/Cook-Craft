import React, { useContext, useEffect, useState } from 'react';
import './RecipeFinder.css';
import Recipe from './Recipe';
import food_image from '../Assets/Assets/food_icon.png'
import { FaArrowRight } from "react-icons/fa6";
import Navbar from './Navbar';

const RecipeFinder = () => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [recipeData, setRecipeData] = useState(null); // Initialize as null
  

  const api_key = '209a9d971517e5daf373624cc32560ab';
  const url = `https://api.edamam.com/search?q=${query}&app_id=8942a5e8&app_key=${api_key}`;

  const handleImageClick = (item) => {
    setShowDetail(true);
    setRecipeData(item.recipe); // Set the selected recipe data
  };

  useEffect(() => {
    if (query) {
      const search = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setRecipe(data);
        } catch (error) {
          console.error('Error fetching the recipe data:', error);
        }
      };
      search();
    }
  }, [query]);

  return (
    
    <div>
      
      {/* <img src={food_image}/>
      <p>QuickEatz</p>
      </div>
      <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setQuery(input)}>Search</button> */}

    <Navbar input={input} setInput={setInput} query={query} setQuery={setQuery}/>

    <div className='main-div'>
      
      <div className="recipes">
        {!showDetail ? (
          recipe && recipe.hits ? (
            recipe.hits.map((item, i) => (
              <div key={i} className='all-food'>
                <div>
                  <img
                    src={item.recipe.image}
                    alt={item.recipe.label}
                    style={{ cursor: 'pointer' }}
                  />
                  <p>{item.recipe.label}</p>
                  <button className="btn btn-outline-success" onClick={() => handleImageClick(item)}> Ingredients <FaArrowRight/></button>

                </div>
              </div>
            ))
          ) : (
            
            query && (
              <div className="spinner-container">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )
            
          )
        ) : (
          <>
          <Recipe recipe={recipeData} />
          
          </>
        )}
      </div>
      </div>

    </div>
  );
};

export default RecipeFinder;
