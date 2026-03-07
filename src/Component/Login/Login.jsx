import React from "react";
import "./Login.css";
import { CiLogin } from "react-icons/ci";
function Login() {
  return (
    <div id="Login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Login successfully...👍");
        }}
      >
        <span id="Logintitle"> Login Page</span>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required />
        </div>

        <div className="list">
          <label htmlFor="password1">Password</label>
          <input type="password" id="password1" required />
        </div>

        <button id="Login-btn">
          Login <CiLogin />
        </button>
      </form>
    </div>
  );
}

export default Login;
