import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import SideBar from "../../components/SideBar/SideBar";
import Content from "../../components/DashboardContent/DashboardContent";
import "./Dashboard.css";

const Dashboard = (props) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  console.log(props)
  return (
    <Router>
      <div className="Dashboard wrapper">
  
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content {...props} toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
  );
};



export default Dashboard;
