import React,{Component} from "react";
import RecipeHeader from "../../components/RecipeComponents/RecipeHeader/RecipeHeader";
import RecipeIngredients from "../../components/RecipeComponents/RecipeIngredients/RecipeIngredients";
import RecipeSteps from "../../components/RecipeComponents/RecipeSteps/RecipeSteps";
import RecipeEquipments from "../../components/RecipeComponents/RecipeEquipments/RecipeEquipments";
import {connect} from  "react-redux";
import "./Recipe.css";

class Recipe extends Component{
    
    render(){
        console.log("hello")
        

        let recipe = null;
        if(this.props.recipeId) {
            console.log(this.props)
            let Ingredients = [];
        for(let i = 0 ; i< this.props.analyzedRecipe["steps"].length ; i++){
            for(let j = 0; j<this.props.analyzedRecipe["steps"][i]["ingredients"].length; j++){
                Ingredients = Ingredients.concat(this.props.analyzedRecipe["steps"][i]["ingredients"][j]["name"]);
            }
        }
        Ingredients = [...new Set(Ingredients)];

        let Equipments = [];
        for(let i = 0 ; i< this.props.analyzedRecipe["steps"].length ; i++){
            for(let j = 0; j<this.props.analyzedRecipe["steps"][i]["equipment"].length; j++){
                Equipments = Equipments.concat(this.props.analyzedRecipe["steps"][i]["equipment"][j]["name"]);
            }
        }
        Equipments = [...new Set(Equipments)];


        let Steps = [];
        for(let i = 0; i<this.props.analyzedRecipe["steps"].length; i++){
            Steps = Steps.concat(this.props.analyzedRecipe["steps"][i]["step"]);
        }

            recipe = <div className = "RecipePage" >
        <RecipeHeader title = {this.props.recipeTitle} imgUrl = {this.props.recipeImg}/>
        <RecipeIngredients ingredients = {Ingredients}/>
        <RecipeEquipments equipments = {Equipments}/>
        <RecipeSteps steps = {Steps}/>
    </div>}
    
    return <>{recipe}</>
}}


const mapStateToProps = (state)=>{
    return{
        recipeId : state.recipe.recipeId, 
    recipeTitle : state.recipe.recipeTitle,
    recipeImg : state.recipe.recipeImg,
    analyzedRecipe : state.recipe.analyzedRecipe
    }
}

export default connect(mapStateToProps)(Recipe);