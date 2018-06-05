import React from 'react';
import {connect} from 'react-redux';
import RecipeSearchForm  from '../display/recipeSearchForm';
import {fetchRecipesFromSpoonacularInBulk} from '../../actions/spoonacularActions';
import {fetchRecipeIdsFromDatabase,changingSingleItemView} from '../../actions/userActions'
export class Dashboard extends React.Component {
    

    recipeFetchString(recipes){
        
        let recipeBulkString="";
        for (let i =0;i<recipes.length;i++){
            recipeBulkString += recipes[i].recipeId+",";
            }
        let recipeString = recipeBulkString.slice(0,-1);
        return recipeString;
        //this.props.dispatch(fetchRecipesFromSpoonacularInBulk(recipeString))
       //.then(() => console.log("finished"));
    }
    componentWillMount(){
        this.props.dispatch(changingSingleItemView(false));
    }

    componentDidMount(){
        if(this.props.loggedIn){
        this.props.dispatch(fetchRecipeIdsFromDatabase(this.props.userId,this.props.authToken))
        .then((res)=>{return this.recipeFetchString(this.props.recipes)})
        .then(res => { this.props.dispatch(fetchRecipesFromSpoonacularInBulk(res))})
        }
    }       

    render() {
        return (
          <div className="dashboard">
            <div className="">
                <h2>Welcome to what2eat</h2>
            </div>
            <RecipeSearchForm />
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      userId: state.authReducer.currentUser.id || "",
      authToken:state.authReducer.authToken,
      recipes:state.recipeReducer.recipes,
      loggedIn:state.authReducer.loggedIn
    }  
};

export default connect(mapStateToProps)(Dashboard);
