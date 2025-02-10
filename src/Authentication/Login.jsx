import React from "react";
import Lottie from "lottie-react";
import loginimg from "../assets/logo/login.json";

const Login = () => {
  return (
    <div className="flex justify-between ">
      <div className="w-1/2">
        <Lottie animationData={loginimg} loop={true} />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="  w-full max-w-sm shrink-0 shadow-2xl ">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
