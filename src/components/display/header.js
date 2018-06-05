import React from "react";
import {Link} from 'react-router-dom';
import '../styles/header.css';
import {signUserOut} from '../../actions/auth';
import {connect} from 'react-redux';
import { userIsSearching } from "../../actions/userActions";



export class Header extends React.Component {


  render(){
    if (!this.props.loggedIn) {
        return (
          <div className = 'header'>
            <div className='logo'>
              what2Eat
            </div>
            <div className="navLinks">
          <Link to="/loginPage">
            <button>Login</button>
          </Link>
          <Link to="/signUp">
            <button>Sign up</button>
          </Link>  
          <Link to="/dashboard">
            <button onClick={()=>{this.props.dispatch(userIsSearching())}}>Dashboard</button>
          </Link>
          </div>
          </div>
        )}
    else { 
      return (
          <div className = 'header'>
            <div className='logo'>
              what2Eat
            </div>
          <div className="navLinks">
          <Link to="/dashboard">
            <button onClick={()=>{this.props.dispatch(userIsSearching())}}>Dashboard</button>
          </Link>
          <Link to="/myRecipes">
            <button>My recipes</button>
          </Link> 
          <Link to="/">
            <button onClick={()=>{this.props.dispatch(signUserOut())}}>Sign Out</button>
          </Link> 
      </div>
      </div>
    )
}
}}

const mapStateToProps = state => ({
  loggedIn: state.authReducer.loggedIn,
})

export default connect(mapStateToProps)(Header) 