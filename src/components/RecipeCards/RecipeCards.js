import React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { Container, Row, Col } from 'reactstrap';
import {connect} from "react-redux";
import * as actions from "../../store/actions/recipeActions";
import * as saveRecipeActions from "../../store/actions/saveRecipeActions";
import ClickAlert from "../../UI/ClickAlert/ClickAlert";

const RecipeCards = (props)=>{

    let recipeAlert = null;
    if(props.showAlert){
        recipeAlert = <ClickAlert type = {props.alertType} />
        setTimeout(()=>{
            props.hideAlert()
        }, 3000)
    }

    return<><Container><Row lg="4" md="3" sm="2" xs="1">
            {props.recipes.map((recipe, index)=>{
        return<Col key = {recipe.id} ><RecipeCard title = {recipe.title} imageUrl = {recipe.image} id = {recipe.id} saved = {props.saved} knowClicked={()=>{
            props.loadAnalyzedRecipe(recipe);
        }} saveRecipe = {()=>{
            props.saveRecipe(props.userId, recipe);
        }}
        deleteRecipe = {()=>{
           
            props.deleteRecipe(props.userId, recipe)
        }} /></Col>
    })}
    </Row></Container>
    {recipeAlert}
    </>
}

const mapStateToProps = (state)=>{
    return {
        userId : state.user.id,
        showAlert : state.saveRecipe.showAlert,
        alertType : state.saveRecipe.alertType
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        loadAnalyzedRecipe : (queryRecipe)=>dispatch(actions.loadAnalyzedRecipe(queryRecipe)),
        saveRecipe : (id, recipe)=>dispatch(saveRecipeActions.saveRecipeInit(id, recipe)),
        deleteRecipe : (id, recipe)=>dispatch(saveRecipeActions.removeSavedRecipe(id, recipe)),
        hideAlert : ()=>dispatch(saveRecipeActions.hideAlert())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCards);