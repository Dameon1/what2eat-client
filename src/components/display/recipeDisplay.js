import React from 'react';
import {connect} from 'react-redux';
import  MultipleRecipesDisplay  from './multipleRecipes';
import SingleRecipe from '../containers/singleRecipe'


export class RecipeDisplay extends React.Component{

render(){
      if (this.props.viewingSingleItem) {
        return (
        <div className='recipesDisplayBox'>
          { this.props.currentApiRecipeDisplayed.map((recipe,index) => (
            <SingleRecipe {...recipe} key={index} index={index}> 
              {recipe.title}
            </SingleRecipe>))}
        </div>)
      } 
      else { 
        return (
        <div className='recipesDisplayBox'> 
          {this.props.apiRecipes.map((recipe,index) => (
            <MultipleRecipesDisplay {...recipe} key={index} index={index}>
              <img src="recipe.image" alt="Some recipe"></img> 
              {recipe.title}
           </MultipleRecipesDisplay>))}</div>)
           } 
      }
    }
const mapStateToProps = state => ({
  apiRecipes:state.recipeReducer.apiRecipes || [],
  currentApiRecipeDisplayed:state.recipeReducer.currentApiRecipeDisplayed,
  viewingSingleItem:state.recipeReducer.viewingSingleItem,
  
});

export default connect(mapStateToProps)(RecipeDisplay);
