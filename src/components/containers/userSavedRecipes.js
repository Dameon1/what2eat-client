import React from 'react';
import {connect} from 'react-redux';
import UserDisplayedRecipes from '../display/userDisplayedRecipes';
import {getUserRecipesInBulkFromSpoonacular} from '../../actions/userActions';

export class UserSavedRecipes extends React.Component {

  componentWillMount(){
    this.props.dispatch(getUserRecipesInBulkFromSpoonacular(this.props.recipes))
  }

  render(){ 
 
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
})

export default connect(mapStateToProps)(UserSavedRecipes);