import { useState } from "react";
import React from "react";
import SignUpComp from "../components/signHelper/SignUpComp";
import RemoveComp from "../components/remove/RemoveComp";
import { Redirect } from "react-router-dom";
import UpdateComp from "../components/update/UpdateComp";
import AllEmpComp from "../components/allEmployees/AllEmpComp";

function Admin(props) {
  const [isAdd, setAdd] = useState(false);
  const [isRemove, setRemove] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [isAll, setAll] = useState(false);
  const [employeeArr, setEmployees] = useState([]);

  if (!props.adminOnly) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>This Is You'r Admin Page</h1>
      <div className="container">
        <div className="btnToUse">
          <button
            id="btn-add"
            hidden={isAdd ? "hidden" : ""}
            onClick={() => {
              setAdd(true);
              setRemove();
              setUpdate();
              setAll();
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
              setAll();
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
              setAll();
            }}
          >
            Update Employee
          </button>

          <button
            id="btn-update"
            hidden={isUpdate ? "hidden" : ""}
            onClick={() => {
              setAll(true);
              setUpdate();
              setAdd();
              setRemove();
            }}
          >
            Show All Employees
          </button>

          <button
            id="btn-cancel"
            hidden={isAdd || isRemove || isUpdate || isAll ? "" : "hidden"}
            onClick={() => {
              setAdd(false);
              setAll(false);
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
          {isAll && <AllEmpComp showEmployees={employeeArr} />}
        </div>
      </div>
    </>
  );
}

export default Admin;
