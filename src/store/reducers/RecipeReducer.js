
import * as actionTypes from "../actions/actionTypes";
const intialState = {
    recipeId : null,
    recipeTitle : null,
    recipeImg : null,
    analizedRecipe : null,
    recipes : []
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
        default :
        return state;
    }

}

export default RecipeReducer;