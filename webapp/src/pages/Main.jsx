import React, { useState } from "react";

export function Main() {
  const [isRunning, setRunning] = useState(false);

  return (
    <container>
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
          }}
        >
          Start/Pause Working
        </button>
      </div>
    </container>
  );
}
