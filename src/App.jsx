import React, { useEffect } from 'react'
import Login from './Components/Auth/Login'
import EmployerDash from './Components/Dashboards/EmployerDash/EmployerDash'
import './App.css'
import AdminDash from './Components/Dashboards/AdminDash/AdminDash'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'

const App = () => {

 useEffect(() => {
 setLocalStorage();
//  getLocalStorage();
 
 },)
 
  
  return (
    <div className='MainIndexBox'>
      <Login/>
      {/* <EmployerDash/> */}
      {/* <AdminDash/> */}
    </div>
  )
}

export default App