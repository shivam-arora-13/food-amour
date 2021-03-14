import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookmark,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import * as saveRecipeActions from "../../store/actions/saveRecipeActions";
import * as userActions from "../../store/actions/UserActions";
import * as actionTypes from "../../store/actions/actionTypes";

// import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle, loadSavedRecipes, userId, logout, clearSavedRecipes, clearLoadedRecipes }) => (
  <div  className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>FOOD AMOUR</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/dashboard"}>
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/savedRecipes"} onClick = {()=>loadSavedRecipes(userId)}>
            <FontAwesomeIcon icon={faBookmark} className="mr-2" />
            Saved Recipes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/"} onClick = {()=>{logout();
          clearLoadedRecipes(); clearSavedRecipes();
          }}>
            
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </NavLink>
        </NavItem>
        
      </Nav>
    </div>
  </div>
);

const mapStateToProps = (state)=>{
  return{
    userId : state.user.id
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    loadSavedRecipes : (userId)=>dispatch(saveRecipeActions.loadSavedRecipes(userId)),
    logout : ()=>dispatch(userActions.logout()),
    clearLoadedRecipes : ()=>dispatch({type : actionTypes.CLEAR_LOADED_RECIPES}),
    clearSavedRecipes : ()=>dispatch({type : actionTypes.CLEAR_SAVED_RECIPES})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
