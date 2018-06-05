import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {authReducer} from './reducers/authReducer';
import thunk from 'redux-thunk';
import {recipeReducer} from './reducers/userReducer';

export default createStore(
   combineReducers({
        recipeReducer:recipeReducer,
        form: formReducer,
        authReducer: authReducer,
       // protectedData: protectedDataReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);