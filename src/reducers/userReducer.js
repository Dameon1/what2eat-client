
import  { FETCH_RECIPES_FROM_DATABASE_REQUEST , FETCH_RECIPES_FROM_DATABASE_SUCCESS, FETCH_RECIPES_FROM_DATABASE_ERROR,
   POST_RECIPE_TO_DATABASE_REQUEST , POST_RECIPE_TO_DATABASE_SUCCESS, POST_RECIPE_TO_DATABASE_ERROR,
         REMOVE_RECIPE_FROM_DATABASE_REQUEST , REMOVE_RECIPE_FROM_DATABASE_SUCCESS, REMOVE_RECIPE_FROM_DATABASE_ERROR,
         CHANGING_SINGLE_ITEM_VIEW, USER_IS_NOT_SEARCHING, USER_IS_SEARCHING} from '../actions/userActions';
         
import  { FETCH_RECIPES_FROM_SPOONACULAR_REQUEST,FETCH_RECIPES_FROM_SPOONACULAR_SUCCESS,FETCH_RECIPES_FROM_SPOONACULAR_ERROR,
          FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_REQUEST,FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_SUCCESS,FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_ERROR } from '../actions/spoonacularActions';

const initialState = {
    userRecipes:[],//users stored recipes
    apiRecipes:[],//api recipes
    currentApiRecipeDisplayed:[],
    loading: false,
    error: null,
    returningResults:false,
    viewingSingleItem:false,
    isSearching:true,
    currentUser: {},
    authToken: ''
    };
    
export function recipeReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_RECIPES_FROM_DATABASE_REQUEST: 
         return Object.assign({}, state, {
            ...state,
            loading:action.loading
            })
    case FETCH_RECIPES_FROM_DATABASE_SUCCESS: 
          return Object.assign({}, state, {
              ...state,
              recipes: [...action.recipes],
              loading:action.loading
              })
    case FETCH_RECIPES_FROM_DATABASE_ERROR: 
          return Object.assign({}, state, {
              ...state,
              error:action.error,
              loading:action.loading
              })
    case POST_RECIPE_TO_DATABASE_REQUEST: 
          return Object.assign({}, state, {
              ...state,
              loading:action.loading
              })
    case POST_RECIPE_TO_DATABASE_SUCCESS: 
          return Object.assign({}, state, {
              ...state,
              loading:action.loading,
              recipes:[...this.state,action.recipe]
              })
    case POST_RECIPE_TO_DATABASE_ERROR: 
            return Object.assign({}, state, {
              ...state,
              error:action.error,
              loading:action.loading
              })
    case REMOVE_RECIPE_FROM_DATABASE_REQUEST: 
            return Object.assign({}, state, {
              ...state,
              loading:action.loading
              })
    case REMOVE_RECIPE_FROM_DATABASE_SUCCESS: 
            return Object.assign({}, state, {
              ...state,
              recipes: [...state.recipes,action.recipe],
              loading:action.loading
              })
    case REMOVE_RECIPE_FROM_DATABASE_ERROR: 
            return Object.assign({}, state, {
              ...state,
              error:action.error,
              loading:action.loading
              })
    case FETCH_RECIPES_FROM_SPOONACULAR_REQUEST: 
            return Object.assign({}, state, {
              ...state,
              loading:action.loading
              })
    case FETCH_RECIPES_FROM_SPOONACULAR_SUCCESS: 
            return Object.assign({}, state, {
              ...state,
              apiRecipes: [...action.recipes],
              loading:action.loading
              })
    case FETCH_RECIPES_FROM_SPOONACULAR_ERROR: 
            return Object.assign({}, state, {
              ...state,
              error:action.error,
              loading:action.loading
              })
    case FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_REQUEST: 
            return Object.assign({}, state, {
              ...state,
              loading:action.loading
              })
    case FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_SUCCESS: 
            return Object.assign({}, state, {
              ...state,
              currentApiRecipeDisplayed: [action.recipe],
              loading:action.loading,
              viewingSingleItem:action.viewingSingleItem
              })
    case FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_ERROR: 
            return Object.assign({}, state, {
              ...state,
              error:action.error,
              loading:action.loading
              })

    case CHANGING_SINGLE_ITEM_VIEW:
            return Object.assign({},state,{
             ...state,
             viewingSingleItem:action.viewingSingleItem
           })
    case USER_IS_NOT_SEARCHING:
           return Object.assign({},state,{
            ...state,
            isSearching:false
          })
    case USER_IS_SEARCHING:
          return Object.assign({},state,{
           ...state,
           isSearching:true
         })
    default:
      return state
  }
}




