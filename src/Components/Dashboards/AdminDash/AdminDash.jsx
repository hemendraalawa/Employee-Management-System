import React from "react";
import Header from "../../Header/Header";
import CreateTask from "../../TaskFeatures/CreateTask/CreateTask";
import AllTask from "../../TaskFeatures/AllTasks/AllTask";

const AdminDash = ({Data}) => {
  return (
    <div>
      <Header Data={Data}/>
      <CreateTask Data={Data}/>
      <AllTask Data={Data}/>
    </div>
  );
};

export default AdminDash;
