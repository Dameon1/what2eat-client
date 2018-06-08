import React from 'react';
import {connect} from 'react-redux';
import '../styles/singleRecipe.css';
import {changingSingleItemView,postRecipeToDatabase,updateStateWithDatabaseResults, removeRecipeFromDatabase} from '../../actions/userActions';
import {Link} from 'react-router-dom';

export class SingleRecipe extends React.Component {

  handleNewRecipeSubmit(recipeId){
      this.props.dispatch(postRecipeToDatabase(recipeId,this.props.userId,this.props.authToken));
      this.props.dispatch(updateStateWithDatabaseResults(this.props.userId,this.props.authToken));      
   }
  handleRemoveRecipeSubmit(recipeId){
    this.props.dispatch(removeRecipeFromDatabase(recipeId,this.props.userId,this.props.authToken));
    this.props.dispatch(updateStateWithDatabaseResults(this.props.userId,this.props.authToken));
  }
  handleBackButtonClicked(){
    this.props.dispatch(changingSingleItemView(false));
  }
  
  render(){
    const arrayOfRecipesFromSavedRecipes = this.props.recipes.map((recipe)=>recipe.recipeId);
    
  if(this.props.viewingSingleItem){
    let instructions = "";

    


    let currentItem = this.props.currentApiRecipeDisplayed[0];
    if (!currentItem){return}


   if (currentItem.analyzedInstructions[0] ) {
   instructions = currentItem.analyzedInstructions[0].steps.map((item,index) => {
            return (        
            <div key={index}>
              {" " + (index+1) + ". " + item.step + "\n"}
            </div>
            )
          });
        }
    if(instructions === undefined) {return}
   
    return (
      <div className='recipeOverview'>
       <img className="sigleRecipeImage" src={currentItem.image} alt={currentItem.title} />
       <div>
        {instructions}
         <a href={currentItem.sourceUrl} target="blank" className="recipeLink">Full Recipe</a>
          </div>
        {(this.props.loggedIn && !arrayOfRecipesFromSavedRecipes.includes(currentItem.id)) ?
           <button onClick={()=>this.handleNewRecipeSubmit(currentItem.id)}>Save</button> 
           : (this.props.loggedIn && arrayOfRecipesFromSavedRecipes.includes(currentItem.id)) ?
           <button onClick={()=>this.handleRemoveRecipeSubmit(currentItem.id)}>UnSave</button> :   null}
        
      {(this.props.loggedIn && this.props.apiRecipes.length === 0)?
        <Link to="/myRecipes">
          <button className="singleRecipeBackButton" onClick={() => this.handleBackButtonClicked()}>Back</button>
        </Link> : 
        <Link to="/searchedRecipes">
          <button className="singleRecipeBackButton" onClick={()=> this.handleBackButtonClicked()}>Back</button>
        </Link> }        
      </div>
    )
  }
  return null
 }
}
const mapStateToProps = state => ({
  currentApiRecipeDisplayed:state.recipeReducer.currentApiRecipeDisplayed,
  viewingSingleItem:state.recipeReducer.viewingSingleItem,
  loggedIn: state.authReducer.loggedIn,
  userId: state.authReducer.currentUser.id || "",
  authToken:state.authReducer.authToken,
  recipes:state.recipeReducer.recipes || [],
  apiRecipes:state.recipeReducer.apiRecipes
})

export default connect(mapStateToProps)(SingleRecipe);
