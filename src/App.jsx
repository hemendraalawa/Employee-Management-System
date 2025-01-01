import React from 'react'
import Login from './Components/Auth/Login'
import EmployerDash from './Components/Dashboards/EmployerDash/EmployerDash'
import './App.css'
import AdminDash from './Components/Dashboards/AdminDash/AdminDash'

const App = () => {
  return (
    <div className='MainIndexBox'>
      {/* <Login/> */}
      {/* <EmployerDash/> */}
      <AdminDash/>
    </div>
  )
}

export default App