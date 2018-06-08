import React from 'react';
import {connect} from 'react-redux';
import Header from '../display/header';
import Content from './content';  
import Footer from '../display/footer';
import {Route, withRouter} from 'react-router-dom';
import LoginForm from '../display/userLogin';
import SignUpForm from '../display/signupForm';
import Dashboard from './dashboard';
import UserSavedRecipes from './userSavedRecipes';
import SingleRecipe from './singleRecipe';
import LandingPage from '../display/landingPage';
import '../styles/landingPage.css';
export class Container extends React.Component {
 
  render(){
   return(
    <div>
      <header role='banner'> 
        <Header />
      </header>
      
      <main >
        <Route exact path = '/' component = {LandingPage} />
        <Route exact path = '/loginPage' component = {LoginForm} />
        <Route exact path = '/signUp' component = {SignUpForm} /> 
        <Route exact path = '/dashboard' component = {Dashboard} /> 
        <Route exact path = '/searchedRecipes' component = {Content} />
        <Route exact path = '/myRecipes' component = {UserSavedRecipes} />
        <Route path = '/recipe/:id' component = {SingleRecipe} />
      </main>
      
      <footer role="contentinfo">
        <Footer />
      </footer>    
    </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.loggedIn
})

export default withRouter(connect(mapStateToProps)(Container));
