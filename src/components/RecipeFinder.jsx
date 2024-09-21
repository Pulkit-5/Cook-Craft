import React, { useEffect, useState } from 'react';
import './RecipeFinder.css';
import Recipe from './Recipe';
import { FaArrowRight } from "react-icons/fa6";
import Navbar from './Navbar';

const RecipeFinder = () => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [recipeData, setRecipeData] = useState(null);

  const api_key = '209a9d971517e5daf373624cc32560ab';

  const handleImageClick = (item) => {
    setShowDetail(true);
    setRecipeData(item.recipe);
  };

  useEffect(() => {
    if (query) {
      const search = async () => {
        try {
          const url = `https://api.edamam.com/search?q=${query}&app_id=8942a5e8&app_key=${api_key}`;
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
      <Navbar input={input} setInput={setInput} query={query} setQuery={setQuery} />
      <div className="main-div">
        <div className="recipes">
          {!showDetail ? (
            recipe?.hits ? (
              recipe.hits.map((item, i) => (
                <div key={i} className="all-food">
                  <div>
                    <img
                      src={item.recipe.image}
                      alt={item.recipe.label}
                      style={{ cursor: 'pointer' }}
                    />
                    <p>{item.recipe.label}</p>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => handleImageClick(item)}
                    >
                      Ingredients <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))
            ) : query ? (
              <div className="spinner-container">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : null
          ) : (
            <Recipe recipe={recipeData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeFinder;
