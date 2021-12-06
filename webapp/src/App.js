import Admin from "./pages/Admin";
import SignIn from "./pages/SignIn";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <SignIn />
      <Admin />
      <Main />
    </div>
  );
}

export default App;
