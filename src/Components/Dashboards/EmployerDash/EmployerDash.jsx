import React from 'react'
import Header from '../../Header/Header'
import TaskListNum from '../../TaskFeatures/TasklistNum/TaskListNum'
import TaskList from '../../TaskFeatures/Tasklist/TaskList'


const EmployerDash = ({Data}) => {
  return (
    <div>
        <Header Data={Data}/>
        <TaskListNum Data={Data}/>
        <TaskList Data={Data}/>
    </div>
  )
}

export default EmployerDash