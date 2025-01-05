import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployerDash from "./Components/Dashboards/EmployerDash/EmployerDash";
import "./App.css";
import AdminDash from "./Components/Dashboards/AdminDash/AdminDash";
import { setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  useEffect(() => {
    setLocalStorage();
  });

  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  // console.log(authData.adminData);
  // console.log(authData.employeesData)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData]

  const handleLogin = (email, password) => {
    if (authData) {
      // Pehle admin check karo
      const admin = authData.adminData.find(
        (e) => email == e.email && password == e.password
      )
      // console.log('check admin:', admin)
      if (admin) {
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        setloggedInUserData(admin);
        return; // Yahan se code ruk jata hai agar admin mil gaya
      }

      // Ab employee check karo
      const employee = authData.employeesData.find(
        (e) => email == e.email && password == e.password
      );
      // console.log('check employee:', employee);
      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
        setloggedInUserData(employee);
        return; // Yahan se code ruk jata hai agar employee mil gaya
      }
    }

    // Agar na admin mila aur na employee, toh alert dikhao
    alert("Email or password invalid");
  };

  return (
    <div className="MainIndexBox">
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDash Data={loggedInUserData} /> : ""}
      {user == "employee" ? <EmployerDash Data={loggedInUserData} /> : ""}
    </div>
  );
};

export default App;
