import React,{useEffect, useState}from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import Recipe from "../../containers/Recipe/Recipe";
import RecipeCards from "../RecipeCards/RecipeCards";
import {connect} from "react-redux";

import NavBar from "../NavBar/NavBar";
import * as actions from "../../store/actions/recipeActions";
import Homepage from "../../containers/Homepage/Homepage";

const Content = (props) => {
  const loadRecipesHandler = (query)=>{
    props.loadRecipes(query);
    props.history.push("/dashboard");

  }


  return<><Container
    fluid
    className={classNames("content", { "is-open": props.sidebarIsOpen })}
  >
    <NavBar toggleSidebar={props.toggleSidebar} onSearchClick = {loadRecipesHandler} />
    <Switch>
      <Route path="/" exact  render = {()=>{
        return <Homepage/>
      }} />
      <Route path = "/recipe" exact component={Recipe}/>
      <Route path = "/dashboard" render = {()=>{return <RecipeCards recipes = {props.loadedRecipes} saved = {false}/> }} />
      <Route path = "/savedRecipes" render = {()=>{
        let savedRecipesCards = null;
        if(props.savedRecipes){
          
          savedRecipesCards = <RecipeCards recipes = {props.savedRecipes} saved = {true} />
        }
        return <> {savedRecipesCards} </>}} />
        
    </Switch>
    
  </Container>
  </>
};
const mapStateToProps = (state)=>{
  return {
    name : state.user.name,
    userId : state.user.id,
    loadedRecipes : state.recipe.recipes ,
    savedRecipes : state.saveRecipe.savedRecipes,
    showAlert : state.saveRecipe.showAlert
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    loadRecipes : (query)=>dispatch(actions.loadRecipes(query))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);

