import React from 'react'
import Header from '../../Header/Header'
import TaskListNum from '../../TaskFeatures/TasklistNum/TaskListNum'
import TaskList from '../../TaskFeatures/Tasklist/TaskList'


const EmployerDash = () => {
  return (
    <div>
        <Header/>
        <TaskListNum/>
        <TaskList/>
    </div>
  )
}

export default EmployerDash