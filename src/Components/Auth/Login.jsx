import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    //  console.log('form submitted');
    //  console.log("Your Email is", email);
    //  console.log("Your Email is", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="LoginCover">
      <video
        autoPlay
        muted
        loop
        src={assets.ems_login_bg01}
        type="video/mp4"
      ></video>

      {/* <div className="LoginBox1"> */}
        <div className="LoginBox2">
          <h2> Please Sign In </h2>
          <form
            className="LoginForm"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={email}
              required
              className="formInp"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                className="formInp"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="formBtn">Sign In</button>
          </form>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
