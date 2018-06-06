import React from 'react';
import {connect} from 'react-redux';
import UserDisplayedRecipes from '../display/userDisplayedRecipes';

export class UserSavedRecipes extends React.Component {

  render(){ 
 
    return (
      <div className='recipesDisplayBox'>
        <ul>
         
          { this.props.recipes.map((recipe,index) => {
            return ( 
              <UserDisplayedRecipes {...recipe} key={index} index={index}>
              {/* <img src="recipe.image" alt="Some recipe"/>
                {recipe.title} */}
              </UserDisplayedRecipes>
            )
            }
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipeReducer.userRecipes || [],
})

export default connect(mapStateToProps)(UserSavedRecipes);