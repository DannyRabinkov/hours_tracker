import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { Container } from "react-bootstrap";
import ShiftCont from "../components/shifts/ShiftCont.jsx";
import "../helpers/timeCountHelper.js";
import {
  controlTime,
  saveTime,
  SaveShiftToDB,
} from "../helpers/timeCountHelper.js";

function Main(props) {
  const [isRunning, setRunning] = useState(false);
  const [shiftArr, setShifts] = useState([]);

  if (!props.empsOnly) {
    return <Redirect to="/" />;
  }

  let createShiftStamp = () => {
    setRunning(false);
    controlTime();
    let shiftObj = saveTime();
    // SaveShiftToDB(shiftObj, () => setShifts([...shiftArr, shiftObj]));
  };

  /* function SaveShiftToDB(obj, callback) {
  Axios.post("http://localhost:3000/api/session/addSession",{
    
  })
 */

  //
  //
  //.then((res) => {
  //callback();
  //})
  //}

  return (
    <div>
      <h1>Main Page</h1>
      <div className="container">
        <p>
          <span id="hours">00</span>:<span id="min">00</span>:
          <span id="sec">00</span>
        </p>
        <button
          id="btn-start"
          hidden={isRunning ? "hidden" : ""}
          onClick={() => {
            controlTime();
            setRunning(true);
          }}
        >
          Start Working
        </button>
        <button
          id="btn-pause"
          hidden={isRunning ? "" : "hidden"}
          onClick={() => createShiftStamp()}
        >
          Start/Pause Working
        </button>
      </div>
      <ShiftCont shift={shiftArr} />
    </div>
  );
}
export default Main;
