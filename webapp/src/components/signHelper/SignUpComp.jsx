/* import validateSignIn from "./signInHelper"; */
import Axios from "axios";
import { useState } from "react";

function SignUpComp(props) {
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const addEmp = () => {
    Axios.post("http://localhost:3000/api/users/addUser", {
      Phone: phone,
      Role: role,
      Password: password,
      Name: name,
    })
      .then(() => {
        alert("employee created successfuly!!");
        props.doneAdding(false);
      })
      .catch(() => {
        alert("Oops! Something went wrong!");
      });
  };
  return (
    <>
      <div className="form">
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          onChange={(e) => {
            e.preventDefault();
            setPhone(e.target.value);
          }}
        />
        <br />
        <label>Role:</label>
        <input
          type="text"
          name="role"
          placeholder="Employee / Employer"
          onChange={(e) => {
            e.preventDefault();
            setRole(e.target.value);
          }}
        />
        <br />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <br />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <br />
        <button onClick={addEmp}> Add </button>
      </div>
    </>
  );
}

export default SignUpComp;
