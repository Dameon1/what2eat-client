import React from 'react';
import {connect} from 'react-redux';
import UserDisplayedRecipes from '../display/userDisplayedRecipes';
import {getUserRecipesInBulkFromSpoonacular} from '../../actions/userActions';
import {Redirect} from 'react-router-dom';
export class UserSavedRecipes extends React.Component {

  componentWillMount(){
    if(this.props.loggedIn){
      this.props.dispatch(getUserRecipesInBulkFromSpoonacular(this.props.recipes))
    }
    
  }

  render(){ 
    if(!this.props.loggedIn){ return <Redirect to="/"/>}
    return (
      <div className='recipesDisplayBox'>
        <ul>
        {this.props.userRecipes.map((recipe,index) => {
          return ( 
            <UserDisplayedRecipes {...recipe} key={index} index={index}/>
            )}
        )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userRecipes: state.recipeReducer.userRecipes || [],
  recipes: state.recipeReducer.recipes || [],
  loggedIn: state.authReducer.loggedIn
})

export default connect(mapStateToProps)(UserSavedRecipes);