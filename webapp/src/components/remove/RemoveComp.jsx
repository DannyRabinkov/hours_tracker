import React from "react";
import { useState } from "react";
import Axios from "axios";

function RemoveComp(props) {
  const [phone, setRemPhone] = useState("");

  const baseUrl = "http://localhost:3000/api/users/";
  const useUrl = baseUrl + phone;

  const removeEmp = () => {
    Axios.delete(useUrl, {
      Phone: phone,
    })
      .then(() => {
        alert("removed successfully");
        props.doneRemove(false);
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
            setRemPhone(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            removeEmp();
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default RemoveComp;
