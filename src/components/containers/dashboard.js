import React from 'react';
import {connect} from 'react-redux';
import RecipeSearchForm  from '../display/recipeSearchForm';
import {fetchRecipeIdsFromDatabase} from '../../actions/userActions'
import '../styles/dashboard.css';
export class Dashboard extends React.Component {
    
    componentWillMount(){
        if(this.props.loggedIn){
          this.props.dispatch(fetchRecipeIdsFromDatabase(this.props.userId,this.props.authToken))
        } 
    }       

    render() {
        return (
          <div className="dashboard">
            <div className="">
                <h2 className="dashboardHeading" >Welcome  {(this.props.loggedIn)? <span className="userNameTextForDashboardHeading">{this.props.username.toUpperCase()}</span> : null} to what2eat</h2>
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
      loggedIn:state.authReducer.loggedIn,
      username:state.authReducer.currentUser.username 
    }  
};

export default connect(mapStateToProps)(Dashboard);
