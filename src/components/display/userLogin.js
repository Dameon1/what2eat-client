
import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux'; 
import Input from './loginInput';
import {login} from '../../actions/auth';
import '../styles/userLogin.css';
import {Redirect} from 'react-router-dom';
//import {refreshAuthToken,clearAuth} from '../actions/auth';
import {required, nonEmpty} from '../../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }
    
    render() {
      if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (  
       
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>Sign In</h2>
                {error}
                <label htmlFor="username">Username</label>
                <Field                
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />               
                <label htmlFor="password">Password</label>
                <Field               
                     component={Input}
                     type="password"
                     name="password"
                     id="password"
                     validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                     Log in
                 </button>
                
            </form>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.loggedIn
  })


export default connect(mapStateToProps)(reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm));
