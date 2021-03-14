import React, {useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {connect} from "react-redux"
import SideBar from "../../components/SideBar/SideBar";
import Content from "../../components/DashboardContent/DashboardContent";
import "./Dashboard.css";
import {Redirect} from "react-router-dom";

const Dashboard = (props) => {
  
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  if(!props.userId){return <Redirect to="/"/>}
  return (
    <Router>
      <div className="Dashboard wrapper">
  
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content {...props} toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
  );
};

const mapStateToProps = (state)=>{
  return{
    userId : state.user.id
  }
}

export default connect(mapStateToProps)( Dashboard);
