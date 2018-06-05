import React from 'react';
import {connect} from 'react-redux';
import "../styles/multipleRecipesDisplay.css";
import {fetchRecipesFromSpoonacularById} from '../../actions/spoonacularActions';

export function userDisplayedRecipes (props){
 

    return (
     
      <div className="recipeImageBox" key={props.index} value={props.id} onClick={()=>console.log(props.id)}>
        {props.title}
        <img src={props.image} alt="Some recipe"></img>
        <button className="getRecipeButton" onClick={()=>props.dispatch(fetchRecipesFromSpoonacularById(props.id))}>Get Recipe</button>
      </div>
    )
  }

  export default connect()(userDisplayedRecipes) 