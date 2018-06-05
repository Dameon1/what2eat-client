import React from 'react';
import {connect} from 'react-redux';
import Header from '../display/header';
import Content from './content';  
import Footer from '../display/footer';
import {Route, withRouter} from 'react-router-dom';
import LoginForm from '../display/userLogin';
import SignUpForm from '../display/signupForm';
import Dashboard from './dashboard';
import userSavedRecipes from './userSavedRecipes';

export class Container extends React.Component {
 
  render(){
   return(
    <div>
      <Header />
       
        <Route exact path = '/loginPage' component = {LoginForm} />
        <Route exact path = '/signUp' component = {SignUpForm} /> 
        <Route exact path = '/dashboard' component = {Dashboard} /> 
        <Route exact path = '/searchedRecipes' component = {Content} />
        <Route exact path = '/myRecipes' component = {userSavedRecipes} />
         
      <Footer />
    </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.loggedIn
})

export default withRouter(connect(mapStateToProps)(Container));
