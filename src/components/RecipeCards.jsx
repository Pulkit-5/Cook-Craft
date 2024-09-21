import React from 'react';
import './RecipeCards.css';

const RecipeCards = ({ item: { recipe } }) => {
  return (
    <div className="card-layout">
      <div className="card">
        <img src={recipe.image} className="card-img-top" alt={recipe.label} />
        <div className="card-body">
          <h5 className="card-title">{recipe.label}</h5>
          <p className="card-text">something</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCards;
