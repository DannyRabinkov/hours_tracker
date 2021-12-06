import { useState } from "react";
import React from "react";
import SignUpComp from "../components/signHelper/SignUpComp";
import RemoveComp from "../components/remove/RemoveComp";

function Admin() {
  const [isAdd, setAdd] = useState(false);
  const [isRemove, setRemove] = useState(false);

  return (
    <>
      <h1>On This Page You Can Add Employee</h1>
      <div className="container">
        <div className="btnToUse">
          <button
            id="btn-add"
            hidden={isAdd ? "hidden" : ""}
            onClick={() => {
              setAdd(true);
              setRemove();
            }}
          >
            Add Employee
          </button>
          <button
            id="btn-remove"
            hidden={isRemove ? "hidden" : ""}
            onClick={() => {
              setRemove(true);
              setAdd();
            }}
          >
            Remove Employee
          </button>

          <button
            id="btn-cancel"
            hidden={isAdd || isRemove ? "" : "hidden"}
            onClick={() => {
              setAdd(false);
              setRemove(false);
            }}
          >
            Cancel
          </button>
          {!isAdd}
          {isRemove && <RemoveComp />}
          {isAdd && <SignUpComp />}
        </div>
      </div>
    </>
  );
}

export default Admin;
