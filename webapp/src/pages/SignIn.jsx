import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { Main } from "./Main";

function SignIn(props) {
  const [signed, setSigned] = useState(false);
  const [phone, setLoginPhone] = useState("");
  const [password, setLoginPassword] = useState("");

  const login = () => {
    Axios.post("http://localhost:3000/api/users/login", {
      Phone: phone,
      Password: password,
    })
      .then(() => {
        alert("successful login!");
        props.getLogged(true);
      })
      .catch(() => {
        alert("Oops! Something went wrong!");
      });
  };

  return (
    <>
      <h1>Sign-In</h1>
      <div className="container">
        <div className="form">
          <label>Phone: </label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            onChange={(e) => {
              setLoginPhone(e.target.value);
            }}
          />
          <br />
          <label>Password: </label>
          <input
            type="text"
            name="Password"
            placeholder="Password"
            onChange={(e) => {
              e.preventDefault();
              setLoginPassword(e.target.value);
            }}
          />{" "}
          <br />
          <button
            onClick={() => {
              login();
            }}
          >
            Sign-in
          </button>
        </div>
      </div>
    </>
  );
}

export default SignIn;
