import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ShiftCont from "../components/shifts/ShiftCont.jsx";
import "../helpers/timeCountHelper.js";
import { controlTime, saveTime } from "../helpers/timeCountHelper.js";

function Main() {
  const [isRunning, setRunning] = useState(false);
  const [shiftArr, setShifts] = useState([]);

  let createShiftStamp = () => {
    setRunning(false);
    controlTime();
    let shiftObj = saveTime();
    setShifts([...shiftArr, shiftObj]);
  };

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
