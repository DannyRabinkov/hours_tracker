import { useState } from "react";
import React from "react";
import SignUpComp from "../components/signHelper/SignUpComp";

function Admin() {
  const [isAdd, setAdd] = useState(false);

  return (
    <>
      <h1>On This Page You Can Add Employee</h1>
      <div className="btnToUse">
        <button
          id="btn-add"
          hidden={isAdd ? "hidden" : ""}
          onClick={() => {
            setAdd(true);
          }}
        >
          Add Employee
        </button>
        {isAdd && <SignUpComp />}
        <button
          id="btn-cancel"
          hidden={isAdd ? "" : "hidden"}
          onClick={() => {
            setAdd(false);
          }}
        >
          Cancel
        </button>
        {!isAdd}
      </div>
    </>
  );
}

export default Admin;
