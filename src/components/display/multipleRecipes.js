import React from 'react';
import {connect} from 'react-redux';
import "../styles/multipleRecipesDisplay.css";
import {fetchRecipesFromSpoonacularById} from '../../actions/spoonacularActions';
import {Link} from 'react-router-dom';
export function MultipleRecipesDisplay (props){
  

    return (
     
      <div className="recipeImageBox" key={props.index} value={props.id} >
        {props.title}
      <img src={props.image} alt="Some recipe"></img>
      <p>Ingredients used: {props.usedIngredientCount}</p>
      <p>Missing ingredients: {props.missedIngredientCount}</p>
      <Link to={`/recipe/${props.id}`}>
      <button className="getRecipeButton" onClick={()=>props.dispatch(fetchRecipesFromSpoonacularById(props.id))}>Get Recipe</button>
      </Link> 
      </div>
    )
      }
   
  export default connect()(MultipleRecipesDisplay) 
  