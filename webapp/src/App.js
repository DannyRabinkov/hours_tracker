import Admin from "./pages/Admin";
import SignIn from "./pages/SignIn";
import React from "react";
import Main from "./pages/Main";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  /* const [isAdminLoggedIn, setLogged] = useState(false);
  const [isLoggedIn, setLoggedUser] = useState(false); */

  return (
    /* {!isAdminLoggedIn && (
        <SignIn
          getLogged={(isAdminLoggedIn) => setLogged(isAdminLoggedIn)}
          getUserLogged={(isLoggedIn) => setLoggedUser(isLoggedIn)}
        />
      )}
      {isAdminLoggedIn && <Admin />}
      {isLoggedIn && <Main />} */

    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/main" component={Main} />
        {/* <Route exact path="*" component={Admin} /> */}
      </Switch>
    </Router>
  );
}

export default App;
