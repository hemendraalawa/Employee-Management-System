import React from 'react'
import './TaskListNum.css'
const TaskListNum = ({Data}) => {
  return (
    <div className='taskBox'>
        <div className='taskListBox taskListBoxBG1'>
          <h3>{Data.tasks[0].active}</h3>
          <h4>Active Tasks</h4>
        </div>
        <div className='taskListBox taskListBoxBG2'>
          <h3>{Data.tasks[0].newTask}</h3>
          <h4>New Tasks</h4>
        </div>
        <div className='taskListBox taskListBoxBG3'>
          <h3>{Data.tasks[0].completed}</h3>
          <h4>Completed Tasks</h4>
        </div>
        <div className='taskListBox taskListBoxBG4'>
          <h3>{Data.tasks[0].failed}</h3>
          <h4>Failed Tasks</h4>
        </div>

    </div>
  )
}

export default TaskListNum