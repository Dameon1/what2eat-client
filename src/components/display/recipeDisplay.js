import React from 'react';
import {connect} from 'react-redux';
import  MultipleRecipesDisplay  from './multipleRecipes';
import { userIsNotSearching  } from '../../actions/userActions';

export class RecipeDisplay extends React.Component{

  componentWillMount(){
      this.props.dispatch(userIsNotSearching());
    }

  render(){
    return (
      <div className='recipesDisplayBox'> 
        {this.props.apiRecipes.map((recipe,index) => (
          <MultipleRecipesDisplay {...recipe} key={index} index={index}/>
        ))}
      </div>
    )} 
}
    
const mapStateToProps = state => ({
  apiRecipes:state.recipeReducer.apiRecipes || [],
});

export default connect(mapStateToProps)(RecipeDisplay);
