import React from 'react';
import {connect} from 'react-redux';
import  MultipleRecipesDisplay  from './multipleRecipes';



export class RecipeDisplay extends React.Component{

render(){
   
     
        return (
        <div className='recipesDisplayBox'> 
          {this.props.apiRecipes.map((recipe,index) => (
            <MultipleRecipesDisplay {...recipe} key={index} index={index}/>
           
           ))}</div>)
           } 
      }
    
const mapStateToProps = state => ({
  apiRecipes:state.recipeReducer.apiRecipes || [],
  currentApiRecipeDisplayed:state.recipeReducer.currentApiRecipeDisplayed,

 
  
});

export default connect(mapStateToProps)(RecipeDisplay);
