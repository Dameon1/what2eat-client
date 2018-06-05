import React from 'react';
import {connect} from 'react-redux';
import "../styles/multipleRecipesDisplay.css";
import {fetchRecipesFromSpoonacularById} from '../../actions/spoonacularActions';

export function MultipleRecipesDisplay (props){
  if(!props.viewingSingleItem){

    return (
     
      <div className="recipeImageBox" key={props.index} value={props.id} onClick={()=>console.log(props.id)}>
        {props.title}
      <img src={props.image} alt="Some recipe"></img>
      <p>Ingredients used: {props.usedIngredientCount}</p>
      <p>Missing ingredients: {props.missedIngredientCount}</p>
      <button className="getRecipeButton" onClick={()=>props.dispatch(fetchRecipesFromSpoonacularById(props.id))}>Get Recipe</button>
      </div>
    )
      }
  return null;
    }
    
  const mapStateToProps = state => ({  
      viewingSingleItem:state.recipeReducer.viewingSingleItem
  })
  
  export default connect(mapStateToProps)(MultipleRecipesDisplay) 
  
  


