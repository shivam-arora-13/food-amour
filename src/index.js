import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import UserReducer from "./store/reducers/UserReducer";
import RecipeReducer from './store/reducers/RecipeReducer';
import SaveRecipeReducer from "./store/reducers/SaveRecipeReducer";

const rootReducer = combineReducers({
  user : UserReducer,
  recipe : RecipeReducer,
  saveRecipe : SaveRecipeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

