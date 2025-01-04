import React, { useContext, useEffect , useState } from 'react'
import Login from './Components/Auth/Login'
import EmployerDash from './Components/Dashboards/EmployerDash/EmployerDash'
import './App.css'
import AdminDash from './Components/Dashboards/AdminDash/AdminDash'
import {setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'



const App = () => {

 useEffect(() => {
 setLocalStorage();
 },)

const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);
  // console.log(authData);
  // console.log(authData.adminData)




const handleLogin = (email, password)=>{
  if(authData && authData.adminData.find((e)=>email== e.email && password == e.password)){
    // console.log('this is a user');
    setUser("admin");
  }else if(authData && authData.employeesData.find((e)=>email== e.email && password == e.password)){
    // console.log("this is an admin");
    setUser("employee")
  }else{
    alert("Email or password invalid");
  }
}
 
  
  return (
    <div className='MainIndexBox'>
     {!user ? <Login handleLogin = {handleLogin}/>  : "" }
     {user == 'admin' ? <AdminDash/>:""}
     {user == 'employee' ?<EmployerDash/>:""}
      
    </div>
  )
}

export default App