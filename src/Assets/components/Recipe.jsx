import React from 'react'
import './Recipe.css'

const Recipe = (props) => {
  return (
    <div className='main-container'>
      <div>
        <img src={props.recipe.image} alt="pjd"/>
      {console.log(props)}
      <p>{props.recipe.label}</p>
      <p>{props.recipe.cuisineType}</p>
      <p>{props.recipe.dishType}</p>
      <p>{props.recipe.mealType}</p>
      <p>{Math.floor(props.recipe.calories)} kcal</p>
      {/* <p>Ingredients:{props.recipe.ingredientLines.map((item,i)=><p>{item}</p>)}</p> */}
      </div>
      <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Ingredients</th>
      <th scope="col">quantity</th>
      <th scope="col">measure</th>
    </tr>
  </thead>
  

  <tbody className='table-body'>
  {props.recipe.ingredients.map((item,i)=>
  <tr>
  <th scope="row">{i+1}</th>
  <td>{item.text}</td>
  <td>{item.quantity}</td>
  <td>{item.measure}</td>
   </tr>
  
  )}
    
  </tbody>
</table>
</div>


    </div>
  )
}

export default Recipe
