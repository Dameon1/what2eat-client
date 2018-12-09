
import React from 'react';
import Header from '../display/header';
import LandingPage from '../display/landingPage';
import LoginForm from '../display/userLogin';
import SignUpForm from '../display/signupForm';
import Dashboard from './dashboard';
import Content from './content';
import UserSavedRecipes from './userSavedRecipes';
import SingleRecipe from './singleRecipe';
import Footer from '../display/footer';
import '../styles/landingPage.css';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

export class Container extends React.Component {
  render() {
   return(
    <div>
      <header role='banner'> 
        <Header />
      </header>
      <main>
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/loginPage' component={ LoginForm } />
        <Route exact path='/signUp' component={ SignUpForm } /> 
        <Route exact path='/dashboard' component={ Dashboard } /> 
        <Route exact path='/searchedRecipes' component={ Content } />
        <Route exact path='/myRecipes' component={ UserSavedRecipes } />
        <Route path='/recipe/:id' component={ SingleRecipe } />
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>    
    </div>
    )
  };
};

export default withRouter(connect()(Container));
