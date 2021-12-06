import React from "react";
import { useState } from "react";
import Axios from "axios";

function RemoveComp() {
  const [phone, setRemPhone] = useState("");

  const baseUrl = "http://localhost:3000/api/users/";
  const useUrl = baseUrl + phone;

  const removeEmp = () => {
    Axios.delete(useUrl, {
      Phone: phone,
    }).then(() => {
      alert("removed successfully");
      window.location.reload(false);
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
