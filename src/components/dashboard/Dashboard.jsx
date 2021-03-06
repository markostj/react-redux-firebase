import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__list">
          <ProjectList />
        </div>
        <div className="dashboard__notifications">
          <Notifications />
        </div>
      </div>
    );
  }
}

export default Dashboard;
