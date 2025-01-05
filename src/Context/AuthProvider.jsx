import React, {useState, createContext, useEffect } from 'react'
import { getLocalStorage} from '../Utils/LocalStorage';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const {adminData,employeesData} = getLocalStorage();
    setUserData({adminData,employeesData});
  },[])
  
  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider