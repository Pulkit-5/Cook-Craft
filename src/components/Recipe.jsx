import React from 'react';
import './Recipe.css';
import './RecipeDetails.css';

const Recipe = ({ recipe }) => {
  return (
    <div className="main-container">
     <div className="recipe-details">
    <img src={recipe.image} alt={recipe.label} />
    <p className="recipe-label">{recipe.label}</p>
    <p className="recipe-type">Cuisine: {recipe.cuisineType}</p>
    <p className="recipe-type">Dish Type: {recipe.dishType}</p>
    <p className="recipe-type">Meal Type: {recipe.mealType}</p>
    <p>{Math.floor(recipe.calories)} kcal</p>
    </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Ingredients</th>
              <th scope="col">Quantity</th>
              <th scope="col">Measure</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {recipe.ingredients.map((item, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.text}</td>
                <td>{item.quantity}</td>
                <td>{item.measure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recipe;
