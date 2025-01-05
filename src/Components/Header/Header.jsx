import React from "react";
import "./Header.css";

const Header = ({Data}) => {
// console.log(Data);
  return (
    <div className="headerBox">
      <div className="header">
        <h2>
          Hello👋 <br/> <span>{Data.username}</span>
        </h2>
        <button>Log Out</button>
      </div>
      
    </div>
  );
};

export default Header;
