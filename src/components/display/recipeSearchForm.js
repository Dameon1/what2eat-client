import "../styles/recipeSearchForm.css";
import React from 'react';
import Checkbox from './checkboxes';
import {connect} from 'react-redux';
import {fetchRecipesFromSpoonacular} from '../../actions/spoonacularActions';
import {Redirect} from 'react-router-dom';
import { userIsNotSearching } from "../../actions/userActions";


export class RecipeSearchForm extends React.Component {
  constructor(props){
    super(props);
  
      this.state= {
        items : ['Chicken','Eggs',"Cheese","Flour","Salt","Bacon","Honey","Butter","Cayenne Pepper","Brown Sugar"]
        }
      }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let queryString ='';
    for (const checkbox of this.selectedCheckboxes) {
      queryString += checkbox+','
      console.log("searchingSpoonacular")
    }
    let recipeString = queryString.slice(0,-1);
    this.props.dispatch(fetchRecipesFromSpoonacular(recipeString));
    this.props.dispatch(userIsNotSearching());
    }
    
  createCheckbox = label => (
    <Checkbox 
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    this.state.items.map(this.createCheckbox)
   )

  addIngredents = (e) => {
    e.preventDefault();
    let value = this.input.value;
    this.setState({
      items:[...this.state.items,value]
    })
    this.input.value="";
  }

  render() {
    if(!this.props.isSearching){ return <Redirect to='/searchedRecipes' />}
     
     
    return (
      <div>
        <form className="addIngredientForm" onSubmit={(e)=>this.addIngredents(e)}> 
          <input type="text" placeholder="Add Ingredient" id="addIngredient" ref={input => (this.input = input)}/>
          <button > Add Item</button>
          <label htmlFor="addIngredient"></label><br/>
        </form>
        <form onSubmit={this.handleFormSubmit} className="recipeSearchForm">
          {this.createCheckboxes()}
          <button className="recipeSearchButton" onClick={this.handleFormSubmit} type="submit">Search</button>
        </form>  
        
      </div>
     
    );
  }
}

const mapStateToProps = state => ({
   isSearching:state.recipeReducer.isSearching
})

export default connect(mapStateToProps)(RecipeSearchForm);