
import * as actionTypes from "../actions/actionTypes";
const intialState = {
    recipeId : null,
    recipeTitle : null,
    recipeImg : null,
    analizedRecipe : null,
    recipes : null
}

const RecipeReducer = (state = intialState, action)=>{
    switch(action.type){
        case actionTypes.LOAD_RECIPES : 
            return {
                ...state,
                recipes : action.recipes
        }
        case actionTypes.LOAD_ANALYZED_RECIPE :
            return{
                ...state,
                recipeId :  action.recipeInfo.id,
                recipeTitle : action.recipeInfo.title,
                recipeImg : action.recipeInfo.image,
                analyzedRecipe : action.analyzedRecipe
            }
        case actionTypes.CLEAR_LOADED_RECIPES : 
        return {
            recipeId : null,
    recipeTitle : null,
    recipeImg : null,
    analizedRecipe : null,
    recipes : null
        }
        default :
        return state;
    }

}

export default RecipeReducer;