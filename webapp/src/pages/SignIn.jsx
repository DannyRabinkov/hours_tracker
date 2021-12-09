import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

function SignIn(props) {
  const [phone, setLoginPhone] = useState("");
  const [password, setLoginPassword] = useState("");

  const baseUrl = "http://localhost:3000/api/users/";
  const useUrl = baseUrl + phone;

  let history1 = useHistory("/admin");
  let history2 = useHistory("/main");

  const login = () => {
    Axios.post("http://localhost:3000/api/users/login", {
      Phone: phone,
      Password: password,
    })
      .then(() => {
        alert("successful login!");
      })
      .then(() => {
        getAdmin();
      })
      .catch(() => {
        alert("Oops! Something went wrong!");
      });
  };

  const getAdmin = () => {
    Axios.get(useUrl, {
      Phone: phone,
    })
      .then((res) => {
        if (res.data === "employee") {
          props.logEmployee(true);
          history2.push("/main");
        }
        if (res.data === "Employer") {
          props.logAdmin(true);
          history1.push("/admin");
        }
      })
      .catch(() => {
        alert("You Are NOT From Here!!");
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
