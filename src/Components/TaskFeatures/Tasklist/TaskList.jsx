import React from "react";
import "./TaskList.css";
const TaskList = () => {
  return (
    <div className="TaskListBox">
      <div className="TaskBox">
        <div className="TaskDetails">
          <h4>
            <span>High</span>
          </h4>
          <p>29 Dec 2024</p>
        </div>
        <div className="yourTask">
          <h3>Your Task is Here</h3>
        </div>
        <div className="TaskDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          asperiores porro incidunt fugit numquam quidem mollitia, nemo eos ea
          consequatur corporis sit eaque corrupti, tempora amet velit ipsa dicta
          magnam.
        </div>
      </div>
    </div>
  );
};

export default TaskList;
