import React, {useState} from "react";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import {BsSearch} from "react-icons/bs"
import {NavLink} from  "reactstrap"
import { Link } from "react-router-dom";

const SearchBar = (props)=>{
  const [searchQuery, setSearchQuery] = useState("");
    return<div className = "NavBarSearchBar"> <InputGroup>
    <Input autoComplete = "off" placeholder="Search Recipe" name="Search Recipe" value={searchQuery} onChange={(event)=>{setSearchQuery(event.target.value)}}/>
    <InputGroupAddon addonType="append">
    <NavLink tag={Link} to={"/dashboard"}>
      <Button className = "NavBarSearchButton" color="danger" onClick={()=>{
        setSearchQuery("")
        props.onSearchClick(searchQuery)}} ><BsSearch/></Button>
           
            </NavLink>
    </InputGroupAddon>
  </InputGroup></div>
}

export default SearchBar;