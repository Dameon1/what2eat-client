import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/createUser';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import Input from './loginInput';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import '../styles/userLogin.css';
import {Redirect} from 'react-router-dom';
const passwordLength = length({min: 4, max: 72});
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {
    onSubmit(values) {
        const {username, password} = values;
        const user = {username, password};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }
        return (
            
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
              
                <label  htmlFor="username">Username</label>
                <Field
                    
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />

                <label  htmlFor="password">Password</label>
                <Field
                    
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label  htmlFor="passwordConfirm">Confirm password</label>
                <Field
                   
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />

                <button
                    
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}
const mapStateToProps = state => ({
    loggedIn: state.authReducer.loggedIn
  })

  export default connect(mapStateToProps)(reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) => 
        dispatch(focus('registration', Object.keys(errors)[0]))
})(SignUpForm));
