import React from 'react'
import './CreateTask.css'

const CreateTask = () => {
  return (
    <div>
        <form  className="AdminDashForm">
        <div className="formBox">
          <div className="formSec1">
            <h4>Task Title</h4>
            <input type="text" placeholder="Make A UI Design" />
            <h4>Date</h4>
            <input type="date" name="" id="" />
            <h4>Assign to</h4>
            <input type="text" placeholder="Employee Name" />
            <h4>Category</h4>
            <input type="text" placeholder="Design, Dev etc..." />
          </div>

          <div className="formSec2">
            <h4>Description</h4>
            <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Write Description for your task "></textarea>
            </div>
            <button>Create Task</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTask