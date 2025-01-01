import React from "react";
import Header from "../../Header/Header";
import CreateTask from "../../TaskFeatures/CreateTask/CreateTask";
import AllTask from "../../TaskFeatures/AllTasks/AllTask";

const AdminDash = () => {
  return (
    <div>
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDash;
