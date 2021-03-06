import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
} from "reactstrap";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css"
import {connect} from "react-redux";

const NavBar = ({ toggleSidebar, onSearchClick, userName, userImage }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(false);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <SearchBar onSearchClick={onSearchClick}  />
      <img src={userImage} className = "NavBarImg" ></img>
      </Navbar>
  );
};

const mapStateToProp = (state)=>{
  return{
    userName : state.user.name,
    userImage : state.user.image
  }
}

export default connect(mapStateToProp)(NavBar);
