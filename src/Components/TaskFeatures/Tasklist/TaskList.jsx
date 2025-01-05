import React from "react";
import "./TaskList.css";
const TaskList = ({Data}) => {
  return (
    <div className="TaskListBox">
      <div className="TaskBox">
        <div className="TaskDetails">
          <h4>
            <span>{Data.tasks[0].complexity}</span>
          </h4>
          <p>{Data.tasks[0].date}</p>
        </div>
        <div className="yourTask">
          <h3>{Data.tasks[0].title}</h3>
        </div>
        <div className="TaskDesc">
          {Data.tasks[0].description}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
