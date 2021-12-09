import { useState } from "react";
import React from "react";
import SignUpComp from "../components/signHelper/SignUpComp";
import RemoveComp from "../components/remove/RemoveComp";
import { Redirect } from "react-router-dom";
import UpdateComp from "../components/update/UpdateComp";

function Admin(props) {
  const [isAdd, setAdd] = useState(false);
  const [isRemove, setRemove] = useState(false);
  const [isUpdate, setUpdate] = useState(false);

  if (!props.adminOnly) {
    return <Redirect to="/" />;
  }

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
              setUpdate();
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
              setUpdate();
            }}
          >
            Remove Employee
          </button>

          <button
            id="btn-update"
            hidden={isUpdate ? "hidden" : ""}
            onClick={() => {
              setUpdate(true);
              setAdd();
              setRemove();
            }}
          >
            Update Employee
          </button>

          <button
            id="btn-cancel"
            hidden={isAdd || isRemove || isUpdate ? "" : "hidden"}
            onClick={() => {
              setAdd(false);
              setRemove(false);
              setUpdate(false);
            }}
          >
            Cancel
          </button>
          {!isAdd}
          {isRemove && (
            <RemoveComp doneRemove={(isRemove) => setRemove(isRemove)} />
          )}
          {isAdd && <SignUpComp doneAdding={(isAdd) => setAdd(isAdd)} />}
          {isUpdate && (
            <UpdateComp doneUpdate={(isUpdate) => setUpdate(isUpdate)} />
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
