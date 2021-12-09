import React from "react";
import { useState } from "react";
import Axios from "axios";

function UpdateComp(props) {
  const [phone, setUpdatePhone] = useState("");
  const [role, setUpdateRole] = useState("");
  const [password, setUpdatePass] = useState("");
  const [name, setUpdateName] = useState("");

  const baseUrl = "http://localhost:3000/api/users/";
  const useUrl = baseUrl + phone;

  const updateEmp = () => {
    Axios.put(useUrl, {
      Phone: phone,
      Role: role,
      Password: password,
      Name: name,
    })
      .then(() => {
        alert("employee updated successfuly!!");
        props.doneUpdate(false);
      })
      .catch(() => {
        alert("Oops! Something went wrong!");
      });
  };
  return (
    <>
      <div className="form">
        <label>Phone: </label>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          onChange={(e) => {
            e.preventDefault();
            setUpdatePhone(e.target.value);
          }}
        />
        <br />
        <label>Role: </label>
        <input
          type="text"
          name="role"
          placeholder="Employee / Employer"
          onChange={(e) => {
            e.preventDefault();
            setUpdateRole(e.target.value);
          }}
        />
        <br />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            e.preventDefault();
            setUpdatePass(e.target.value);
          }}
        />
        <br />
        <label>Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            e.preventDefault();
            setUpdateName(e.target.value);
          }}
        />
        <br />
        <button onClick={updateEmp}> Update </button>
      </div>
    </>
  );
}

export default UpdateComp;
