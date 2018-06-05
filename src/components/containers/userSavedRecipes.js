import React from 'react';
import {connect} from 'react-redux';
import UserDisplayedRecipes from '../display/userDisplayedRecipes';

export class UserSavedRecipes extends React.Component {

  render(){ 
 
    return (
      <div className='recipesDisplayBox'>
        <ul>
          <p>something</p>
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
  recipes: state.recipeReducer.apiRecipes || [],
})

export default connect(mapStateToProps)(UserSavedRecipes);