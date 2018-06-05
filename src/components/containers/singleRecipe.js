import React from 'react';
import {connect} from 'react-redux';
import '../styles/singleRecipe.css';
import {changingSingleItemView,postRecipeToDatabase} from '../../actions/userActions';
import {Link} from 'react-router-dom';

export class SingleRecipe extends React.Component {

  handleNewRecipeSubmit(recipeId){
      this.props.dispatch(postRecipeToDatabase(recipeId,this.props.userId,this.props.authToken));
   }
  
  render(){
  
  if(this.props.viewingSingleItem){
    let currentItem = this.props.currentApiRecipeDisplayed[0];
    let instructions = this.props.currentApiRecipeDisplayed[0].analyzedInstructions[0].steps.map((item,index) => {
      return (
        
      <div key={index}>
      {console.log("is viewing singleItem")}
        {" " + (index+1) + " " + item.step }
      </div>
      )
    });
    if(instructions === undefined) {return}
    return (
      <div className='recipeOverview'>
       <img src={currentItem.image} alt={currentItem.title} />
       <div>
        {instructions}
         <a href={currentItem.sourceUrl} target="blank">Full Recipe</a>
          </div>
        {(this.props.loggedIn)? <button onClick={()=>this.handleNewRecipeSubmit(currentItem.id)}>Save</button>:null}
        <Link to={`/dashboard`}>
      <button className="getRecipeButton" onClick={()=>this.props.dispatch(changingSingleItemView(false))}>Back</button>
      </Link> 
      
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
  authToken:state.authReducer.authToken
 
})

export default connect(mapStateToProps)(SingleRecipe);
