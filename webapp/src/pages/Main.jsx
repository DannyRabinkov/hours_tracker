import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../helpers/timeCountHelper.js";
import { controlTime, saveTime } from "../helpers/timeCountHelper.js";

export function Main() {
  const [isRunning, setRunning] = useState(false);

  return (
    <Container>
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
          onClick={() => {
            setRunning(false);
            controlTime();
            saveTime();
          }}
        >
          Start/Pause Working
        </button>
      </div>
    </Container>
  );
}
