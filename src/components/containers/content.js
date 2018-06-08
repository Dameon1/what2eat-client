import React from 'react';
import RecipeDisplay from '../display/recipeDisplay';
import {connect} from 'react-redux';
//import {Redirect} from 'react-router-dom'
export class Content extends React.Component  {

  

  render(){
   
     return(
      <div> Content Displayed Below
        <RecipeDisplay /> 
      </div>
    )
  }
}


const mapStateToProps = state => ({
  loggedIn:state.authReducer.loggedIn,
  apiRecipes:state.recipeReducer.apiRecipes
})

export default connect(mapStateToProps)(Content)
