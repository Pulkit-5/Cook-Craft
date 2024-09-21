import React from 'react'
import './RecipeCards.css'

const RecipeCards = (item) => {
    
  return (
    <div className='card-layout'>
      <div className="card">
        <img src={item.item.recipe.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.item.recipe.label}</h5>
          <p className="card-text">
          something
          </p>
          <a href="#" className="btn btn-primary">
           Go somewhere
          </a>
        </div>
       </div>

    </div>
  )
}

export default RecipeCards
