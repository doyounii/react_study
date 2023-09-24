//Navigate : Route로 설정된 특정 페이지로 이동
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = ({ authenticated, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };
  if (authenticated) return <Navigate to="/login" replace={true} />;
  return (
    <>
      <h1>Login</h1>
      <form>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>

          <div class="form-group row"></div>
        </div>

        <div class="form-group row">
          <div class="col-sm-10">
            <button onClick={handleClick} type="submit" class="btn btn-primary">
              login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
